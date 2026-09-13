/*
  layout.js
  =========
  Desenha o header e o footer do site a partir de window.SITE (site-data.js).

  Como usar em qualquer página:

    <div id="site-header-root"></div>
    ... conteúdo da página ...
    <div id="site-footer-root"></div>

    <script src="assets/js/site-data.js"></script>
    <script src="assets/js/layout.js"></script>
    <script>
      renderHeader({ active: "topicos" });
      renderFooter({ related: [
        { label: "35 exercícios", href: "integracao-por-partes-exercicios.html" }
      ]});
    </script>

  Parâmetro "base": use "../" quando a página estiver dentro de uma subpasta
  (topicos/ ou provas/) e "" (ou omita) quando estiver na raiz do site.
  Ele só afeta os links de navegação do header/footer — os links da seção
  "related" (relacionados a esta página) você já escreve prontos, relativos
  à própria página.
*/

function resolveHref(href, base) {
  if (!href) return "#";
  if (/^(https?:)?\/\//.test(href) || href.startsWith("#") || href.startsWith("mailto:")) return href;
  return (base || "") + href;
}

function renderHeader(opts) {
  opts = opts || {};
  var base = opts.base || "";
  var active = opts.active || "";
  var root = document.getElementById("site-header-root");
  if (!root || !window.SITE) return;

  var navHtml = SITE.nav.map(function (item) {
    var cls = item.key === active ? " current" : "";
    return '<a href="' + resolveHref(item.href, base) + '" class="' + cls.trim() + '">' + item.label + "</a>";
  }).join("");

  root.innerHTML =
    '<header class="site-header">' +
      '<a class="brand" href="' + resolveHref("index.html", base) + '">' +
        '<span class="brand-mark">' + SITE.brand.mark + "</span>" +
        '<span class="brand-word">' + SITE.brand.word + "</span>" +
      "</a>" +
      '<nav class="site-nav">' + navHtml + "</nav>" +
    "</header>";
}

function renderFooter(opts) {
  opts = opts || {};
  var base = opts.base || "";
  var related = opts.related || null; // { title, links: [{label, href}] }
  var root = document.getElementById("site-footer-root");
  if (!root || !window.SITE) return;

  var navLinksHtml = SITE.nav.map(function (item) {
    return '<a href="' + resolveHref(item.href, base) + '">' + item.label + "</a>";
  }).join("");

  var topicsLinksHtml = (window.TOPICS || [])
    .filter(function (t) { return t.status === "available"; })
    .map(function (t) {
      var first = t.links && t.links[0];
      return first ? '<a href="' + resolveHref(first.href, base) + '">' + t.title + "</a>" : "";
    }).join("");

  var relatedHtml;
  if (related && related.links && related.links.length) {
    relatedHtml = related.links.map(function (l) {
      return '<a href="' + l.href + '">' + l.label + "</a>";
    }).join("");
  } else {
    relatedHtml = '<span class="footer-empty">nada por aqui ainda</span>';
  }
  var relatedTitle = (related && related.title) || "Nesta página";

  var repoLink = SITE.repoUrl
    ? '<a href="' + SITE.repoUrl + '" target="_blank" rel="noopener">código-fonte ↗</a>'
    : "";

  root.innerHTML =
    '<footer class="site-footer">' +
      '<div class="footer-inner">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<a class="brand" href="' + resolveHref("index.html", base) + '">' +
              '<span class="brand-mark">' + SITE.brand.mark + "</span>" +
              '<span class="brand-word">' + SITE.brand.word + "</span>" +
            "</a>" +
            "<p>" + SITE.tagline + "</p>" +
          "</div>" +
          '<div class="footer-links">' +
            "<div>" +
              '<span class="footer-h">Navegação</span>' + navLinksHtml +
            "</div>" +
            "<div>" +
              '<span class="footer-h">' + relatedTitle + "</span>" + relatedHtml +
            "</div>" +
            "<div>" +
              '<span class="footer-h">Tópicos disponíveis</span>' + (topicsLinksHtml || '<span class="footer-empty">em construção</span>') +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        "<span>Criado por " + SITE.author + "</span>" +
        '<span>' + repoLink + (repoLink ? " · " : "") + SITE.footerNote + "</span>" +
      "</div>" +
    "</footer>";
}
