"use strict";

const avocadosElement = document.querySelector(".avocados");
let avocados;
const avocadoPrice = 1.5;
const money = 33;

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }

avocadosElement.innerHTML = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log(avocadosElement);
