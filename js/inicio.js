let sectionBotoesInicio = document.getElementById("botoes-inicio");
let botaoComecar = document.querySelector(".botao-comecar");
let botaoAdicionar = document.querySelector(".botao-adicionar");
let sectionCadastroPalavras = document.getElementById("cadastro-palavras");
let sectionAdivinharPalavra = document.getElementById("adivinha-palavra");

botaoComecar.addEventListener("click", () => {
  sectionBotoesInicio.style.display = "none";
  sectionAdivinharPalavra.style.display = "flex";

  sorteaPalavra();
  reiniciarJogo();
  criarUnderline();
});

botaoAdicionar.addEventListener("click", () => {
  sectionBotoesInicio.style.display = "none";
  sectionCadastroPalavras.style.display = "flex";

  textArea.focus();
});

document.body.style.zoom = "90%";
