"use strict";
const nameLengthElement = document.querySelector(".name_length");
const name = "Ana Castrillo";
const nameLength = 13;
nameLengthElement.innerHTML = `<p class="name_length">
    El nombre de mi compañera es <span>${name}</span>, y está compuesto por
    <span>${nameLength}</span> caracteres
  </p>`;

/* Mensaje que aparece en la consola al loguear el mensaje
console.log("El nombre de mi compañera es " + name + "y está compuesto por " + name.length + " caracteres");
El nombre de mi compañera es Ana Castrilloy está compuesto por 13 caracteres */
