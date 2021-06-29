"use strict";
const nameLengthElement = document.querySelector(".name_length");
const adalaberName = "Ana Castrillo";
nameLengthElement.innerHTML = `<p class="name_length">
    El nombre de mi compañera es <span>${adalaberName}</span>, y está compuesto por
    <span>${adalaberName.length}</span> caracteres
  </p>`;
console.log(
  `El nombre de mi compañera es ${adalaberName} y está compuesto por ${adalaberName.length} caracteres`
);
