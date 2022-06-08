let botaoNovoJogo = document.querySelector(".botao-novo-jogo");
let botaoDesistir = document.querySelector(".botao-desistir");
let palavra = document.getElementById("palavra-secreta");
let palavraDigitada = document.getElementById("letras-errada");

botaoNovoJogo.addEventListener("click", () => {
  reiniciarJogo();
  criarUnderline();
});

botaoDesistir.addEventListener("click", () => {
  sectionAdivinharPalavra.style.display = "none";
  sectionBotoesInicio.style.display = "flex";

  reiniciarJogo();
});
