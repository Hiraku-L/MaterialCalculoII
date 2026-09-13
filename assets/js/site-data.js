/*
  site-data.js
  ============
  ÚNICA FONTE DE VERDADE do conteúdo "estrutural" do site.

  Para ADICIONAR um tópico novo: acrescente um objeto em TOPICS.
  Para ADICIONAR uma prova nova: acrescente um objeto em PROVAS.
  Para REMOVER: apague o objeto (ou mude status para "soon" para deixar
  como "em breve" sem apagar).

  Nenhum outro arquivo precisa ser tocado — index.html lê estes arrays
  e desenha os cards sozinho (veja home.js). O header e o footer também
  são desenhados a partir do objeto SITE (veja layout.js).
*/

window.SITE = {
  brand: { mark: "∫", word: "Cálculo II" },

  tagline: "Material de estudo de Cálculo II — teoria, exercícios comentados e provas resolvidas, tudo no mesmo formato.",

  // usados no header (todas as páginas) e na coluna "Navegação" do footer
  nav: [
    { key: "home",    label: "Início",  href: "index.html" },
    { key: "topicos", label: "Tópicos", href: "index.html#topicos" },
    { key: "provas",  label: "Provas",  href: "index.html#provas" }
  ],

  // link para o repositório — aparece no footer como "código-fonte"
  repoUrl: "https://github.com/Hiraku-L/MaterialCalculoII",

  author: "Ícaro Lira",
  footerNote: "Cálculo II · conteúdo em construção"
};

/*
  TOPICS
  ------
  id       -> usado apenas como referência interna
  number   -> número de exibição no card ("01", "02"...)
  title    -> título do card
  summary  -> descrição curta (1-2 frases)
  status   -> "available" (card ativo, com links) | "soon" (card bloqueado, cinza)
  links    -> lista de { label, href } — cada botão do card.
              hrefs são relativos à raiz do site (index.html está na raiz).
*/
window.TOPICS = [
  {
    id: "integracao-por-partes",
    number: "01",
    title: "Integração por partes",
    summary: "A fórmula, de onde ela vem, como escolher u e dv (LIATE), integrais cíclicas, método tabular e 35 exercícios comentados.",
    status: "available",
    links: [
      { label: "Ver teoria",     href: "topicos/integracao-por-partes.html" },
      { label: "35 exercícios",  href: "topicos/integracao-por-partes-exercicios.html" }
    ]
  },
  {
    id: "substituicao-trigonometrica",
    number: "02",
    title: "Substituição trigonométrica",
    summary: "Como resolver integrais com √(a²−x²), √(a²+x²) e √(x²−a²) trocando x por seno, tangente ou secante.",
    status: "available",
    links: [
      { label: "Ver teoria",     href: "topicos/substituicao-trigonometrica.html" },
      //{ label: "35 exercícios",  href: "topicos/integracao-por-partes-exercicios.html" }
    ]
  },
  {
    id: "fracoes-parciais",
    number: "03",
    title: "Frações parciais",
    summary: "Decompondo funções racionais em frações mais simples para integrar termo a termo — casos lineares, repetidos e quadráticos.",
    status: "soon"
  },
  {
    id: "integrais-improprias",
    number: "04",
    title: "Integrais impróprias",
    summary: "Limites de integração infinitos e descontinuidades no integrando — como calcular e como decidir convergência ou divergência.",
    status: "soon"
  },
  {
    id: "sequencias-series",
    number: "05",
    title: "Sequências e séries",
    summary: "Convergência de sequências, séries numéricas, testes de convergência e séries de potências.",
    status: "soon"
  },
  {
    id: "coordenadas-polares",
    number: "06",
    title: "Coordenadas polares",
    summary: "Curvas em coordenadas polares, área entre curvas polares e conversão entre sistemas de coordenadas.",
    status: "soon"
  }
];

/*
  PROVAS
  ------
  status "available" precisa de href (para onde o botão "Resolver prova" aponta).
  status "soon" não precisa de href — o card fica travado.
*/
window.PROVAS = [
  {
    id: "prova-1",
    title: "Prova 1",
    itemsCount: 7,
    tags: ["substituição", "por partes", "frações parciais", "impróprias"],
    summary: "Integrais indefinidas, uma integral definida com frações parciais e duas integrais impróprias com análise de convergência.",
    status: "available",
    href: "provas/prova-1.html"
  },
  {
    id: "prova-2",
    title: "Prova 2",
    tags: ["a definir"],
    summary: "Nova prova comentada chegando em breve, seguindo o mesmo formato.",
    status: "soon"
  },
  {
    id: "prova-3",
    title: "Prova 3",
    tags: ["a definir"],
    summary: "Nova prova comentada chegando em breve, seguindo o mesmo formato.",
    status: "soon"
  }
];
