"use strict";

const button = document.querySelector(".alert");
const input = document.querySelector(".name");
button.addEventListener("click", function getAlert() {
  const name = input.value;
  console.log(`Hola, ${name}`);
});
