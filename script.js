const texto = "Desenvolvimento WEB, sistema de cadastros de código do setor de engenharia.";
const descricao = document.getElementById("descricao");
let index = 0;

function digitar() {
  if (index < texto.length) {
    descricao.textContent += texto.charAt(index);
    index++;
    setTimeout(digitar, 60);
  }
}

window.onload = digitar;

const btn = document.getElementById("btn-lermais");
const curriculo = document.getElementById("curriculo");

btn.addEventListener("click", () => {
  curriculo.classList.toggle("hidden");
  btn.textContent = curriculo.classList.contains("hidden") ? "Ler mais" : "Ler menos";
});
