"use strict";

const agelElement = document.querySelector(".age");
const age = 2;

if (age === 1) {
  console.log("La edad del perro equivale a 15 años de humano");
} else if (age === 2) {
  console.log("La edad del perro equivale a 24 años de humano");
} else if (age >= 3) {
  console.log(
    "A partir del tercer año, cada año de perro equivale a 5 años de humano"
  );
}
