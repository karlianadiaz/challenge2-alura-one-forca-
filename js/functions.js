let palavrasSecretas = ["mobile", "web", "design"];

let letrasErradas = [];
let letrasAcertadas = [];
let palavraSecreta = sorteaPalavra();
// console.log(palavraSecreta);

function sorteaPalavra() {
  let palavraSecreta =
    palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)];

  return palavraSecreta;
}

function iniciaJogo() {
  if (sectionAdivinharPalavra.style.display === "flex") {
    document.addEventListener("keydown", (event) => {
      let letra = event.key;
      let codidoLetra = letra.charCodeAt();

      if (validarIntervaloLetras(codidoLetra)) {
        if (letrasErradas.includes(letra)) {
          // alert("Letra já foi digitada");
          return;
          // mostrarMensagemLetraRepetida();
        } else {
          if (palavraSecreta.includes(letra)) {
            letrasAcertadas.push(letra);
          } else {
            letrasErradas.push(letra);
          }
        }
        atualizarJogo();
      }
    });
  }
}

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  let erradas = document.querySelector(".letras-erradas");
  erradas.innerHTML = "";

  letrasErradas.forEach((letra) => {
    erradas.innerHTML += `<span>${letra}</span>`;
  });
}

function criarUnderline() {
  let certas = document.querySelector(".letras-certas");
  let erradas = document.querySelector(".letras-erradas");
  let underline = document.querySelector(".underline");
  let parteCorpo = document.querySelectorAll(".forca-parte");

  // Limpa underline, letras certas e erradas
  underline.innerHTML = "";
  certas.innerHTML = "";
  erradas.innerHTML = "";

  // Limpa as partes do corpo
  parteCorpo.forEach((parte) => {
    parte.style.display = "none";
  });

  palavraSecreta.split("").forEach((letra) => {
    var largura = window.innerWidth;

    certas.innerHTML += `<span>&nbsp;</span>`;

    if (largura >= 768 || largura >= 1200) {
      underline.innerHTML += `<svg><line x1="2" y1="4" x2="80" y2="4"></svg>`;
    } else {
      underline.innerHTML += `<svg><line x1="2" y1="4" x2="28" y2="4"></svg>`;
    }
  });
}

function mostrarLetrasCertas() {
  let certas = document.querySelector(".letras-certas");
  certas.innerHTML = "";

  palavraSecreta.split("").forEach((letra) => {
    if (letrasAcertadas.includes(letra)) {
      certas.innerHTML += `<span>${letra}</span>`;
    } else {
      certas.innerHTML += `<span>&nbsp;</span>`;
    }
  });
}

function desenharForca() {
  let parteCorpo = document.querySelectorAll(".forca-parte");

  for (let i = 0; i < letrasErradas.length; i++) {
    parteCorpo[i].style.display = "block";
  }
}

function validarIntervaloLetras(codigo) {
  return codigo >= 97 && codigo <= 122; // 97 = a, 122 = z
}

function adicionaPalavraArray(texto) {
  texto = texto.toLowerCase();
  if (palavrasSecretas.includes(texto)) {
    alert("A palavra já foi adicionada");
    textArea.focus();
    return;
  } else {
    palavrasSecretas.push(texto);
    textArea.value = "";
  }

  // console.log(palavrasSecretas);
}

function reiniciarJogo() {
  letrasErradas = [];
  letrasAcertadas = [];
  palavraSecreta = sorteaPalavra();
  // console.log(palavraSecreta);
  iniciaJogo();
  criarUnderline();
}

function checarJogo() {
  let mensagem = "";
  let containerPalavra = document.querySelector(".letras-certas");
  let partesCorpo = document.querySelectorAll(".forca-parte");
  let palavraDigitada = containerPalavra.innerText.toLowerCase();

  if (letrasErradas.length === partesCorpo.length) {
    // console.log("Você perdeu!");
    mensagem = "Fim do jogo. Você perdeu!";
  }

  if (palavraSecreta === palavraDigitada) {
    // console.log("Você ganhou!");
    mensagem = "Você venceu! Parabéns!";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function jogoNovo() {
  reiniciarJogo();
  criarUnderline();
  document.querySelector(".popup-container").style.display = "none";
}
