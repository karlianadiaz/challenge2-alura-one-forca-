let botaoSalvar = document.querySelector(".botao-salvar");
let botaoCancelar = document.querySelector(".botao-cancelar");
let textArea = document.querySelector(".input-frase");

botaoSalvar.addEventListener("click", () => {
  if (textArea.value.length >= 2) {
    if (palavrasSecretas.includes(textArea.value)) {
      alert("A palavra já foi adicionada");
      textArea.focus();
      return;
    } else {
      sectionCadastroPalavras.style.display = "none";
      sectionAdivinharPalavra.style.display = "flex";
      adicionaPalavraArray(textArea.value);
      iniciaJogo();
      reiniciarJogo();
      criarUnderline();
    }
  } else {
    alert("Digite uma frase com pelo menos 2 letras");
    textArea.focus();
    return;
  }
});

botaoCancelar.addEventListener("click", () => {
  sectionCadastroPalavras.style.display = "none";
  sectionBotoesInicio.style.display = "flex";

  reiniciarJogo();
});
