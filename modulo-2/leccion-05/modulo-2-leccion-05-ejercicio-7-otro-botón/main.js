"use strict";

const button = document.querySelector(".button");

function changeBackgroundColor() {
  button.classList.toggle("btn")
}

button.addEventListener("click", changeBackgroundColor)
