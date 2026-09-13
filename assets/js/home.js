/*
  home.js
  Usado só pelo index.html. Lê window.TOPICS e window.PROVAS (site-data.js)
  e desenha os cards da home automaticamente — adicionar/remover um tópico
  ou uma prova é só editar o array em site-data.js, esta página nunca
  precisa ser tocada.
*/

function renderTopicsGrid(containerId) {
  var el = document.getElementById(containerId);
  if (!el || !window.TOPICS) return;

  el.innerHTML = TOPICS.map(function (t) {
    var locked = t.status !== "available";
    var links = (t.links || []).map(function (l) {
      return '<a href="' + l.href + '">' + l.label + "</a>";
    }).join("");

    return (
      '<div class="topic-card' + (locked ? " locked" : "") + '">' +
        '<div class="tnum">' + t.number + "</div>" +
        "<h3>" + t.title + "</h3>" +
        "<p>" + t.summary + "</p>" +
        (locked
          ? '<span class="badge-soon">em breve</span>'
          : '<div class="topic-links">' + links + "</div>") +
      "</div>"
    );
  }).join("");
}

function renderProvasGrid(containerId) {
  var el = document.getElementById(containerId);
  if (!el || !window.PROVAS) return;

  el.innerHTML = PROVAS.map(function (p) {
    var locked = p.status !== "available";
    var tagsHtml = (p.tags || []).map(function (tag) {
      return '<span class="prova-tag">' + tag + "</span>";
    }).join("");
    var meta = locked ? "em breve" : (p.itemsCount ? p.itemsCount + " itens" : "");

    return (
      '<div class="prova-card' + (locked ? " locked" : "") + '">' +
        '<div class="prova-top"><h3>' + p.title + "</h3>" +
          '<span class="prova-meta">' + meta + "</span></div>" +
        '<div class="prova-tags">' + tagsHtml + "</div>" +
        "<p>" + p.summary + "</p>" +
        (locked ? "" : '<a class="btn-secondary" href="' + p.href + '">Resolver prova</a>') +
      "</div>"
    );
  }).join("");
}
