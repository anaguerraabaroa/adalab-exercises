"use strict";

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

function changeBackgroundColor() {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle("btn__selected")
}

button1.addEventListener("click", changeBackgroundColor)
button2.addEventListener("click", changeBackgroundColor)
