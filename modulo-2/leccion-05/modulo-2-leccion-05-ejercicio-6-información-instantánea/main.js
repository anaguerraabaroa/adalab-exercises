"use strict";

const input = document.querySelector(".input");
const text = document.querySelector(".text");

function getInputValue() {
  const inputValue = input.value;
  text.innerHTML = inputValue;
}

input.addEventListener("change", getInputValue)
