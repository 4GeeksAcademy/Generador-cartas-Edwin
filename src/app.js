import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {

  let valorCarta = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let numeroAleatorio = Math.floor(Math.random() * 13)  
  document.getElementById("valor-carta").innerHTML = valorCarta[numeroAleatorio];



};
