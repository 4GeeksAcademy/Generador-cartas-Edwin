import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {

  let valorCarta = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let numeroAleatorioCarta = Math.floor(Math.random() * 13); 
  document.getElementById("valor-carta").innerHTML = valorCarta[numeroAleatorioCarta];

  let pintas = ["spade", "heart", "club", "diamond"];
  let numeroAleatorioPintas = Math.floor(Math.random() * 4);
  
  let pintaUp = document.querySelector(".pinta-up");
  let pintaDown = document.querySelector(".pinta-down");

  pintaUp.className = `pinta-up ${pintas[numeroAleatorioPintas]}`;
  pintaDown.className = `pinta-down ${pintas[numeroAleatorioPintas]}`;
  console.log()

};
