"use strict";

const button = document.querySelector(".alert");
const input = document.querySelector(".name");

function getAlert() {
  const name = input.value;
  console.log(`Hola, ${name}`);
};

button.addEventListener("click", getAlert);


// Otra forma de declarar la función:
// button.addEventListener("click", function getAlert() {
//   const name = input.value;
//   console.log(`Hola, ${name}`);
// });