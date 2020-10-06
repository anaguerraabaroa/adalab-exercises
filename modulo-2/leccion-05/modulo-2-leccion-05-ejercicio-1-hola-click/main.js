"use strict";
const button = document.querySelector(".alert");
const text = document.querySelector(".text");
function getAlert() {
  text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}
button.addEventListener("click", getAlert);
