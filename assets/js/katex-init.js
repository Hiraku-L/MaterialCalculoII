/*
  katex-init.js
  Renderiza toda a matemática da página (delimitadores \[ \] e \( \)).
  Chame initKatex() depois que o conteúdo da página já estiver no DOM.
*/

function initKatex() {
  if (typeof renderMathInElement !== "function") return;
  renderMathInElement(document.body, {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
}

document.addEventListener("DOMContentLoaded", initKatex);
