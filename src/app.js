import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

function generarCarta() {
  let valorCarta = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let numeroAleatorioCarta = Math.floor(Math.random() * 13); 

  let pintas = ["spade", "heart", "club", "diamond"];
  let numeroAleatorioPintas = Math.floor(Math.random() * 4);

  return [valorCarta[numeroAleatorioCarta], pintas[numeroAleatorioPintas]];
}

function actualizarCarta() {
  
  let [carta, pinta] = generarCarta();
  
  document.getElementById("valor-carta").innerHTML = carta;

  let pintaUp = document.querySelector(".pinta-up");
  let pintaDown = document.querySelector(".pinta-down");

  pintaUp.className = `pinta-up ${pinta}`;
  pintaDown.className = `pinta-down ${pinta}`;
}

function temporizadorNuevaCarta(intervalo) {
  let tiempoRestante = intervalo / 1000;
  const contador = document.getElementById("contador-tiempo");

  setInterval(() => {
    tiempoRestante--;
    contador.innerHTML = `Nueva carta en: ${tiempoRestante}s`;

    if (tiempoRestante <= 0) {
      actualizarCarta();
      tiempoRestante = intervalo / 1000;
    }
  }, 1000);
}

window.onload = function() {
  
  actualizarCarta();

  let botonNuevaCarta = document.querySelector(".new-card-button");
  botonNuevaCarta.addEventListener("click", actualizarCarta);

  temporizadorNuevaCarta(10000); // tiempo en milisegundos
};
