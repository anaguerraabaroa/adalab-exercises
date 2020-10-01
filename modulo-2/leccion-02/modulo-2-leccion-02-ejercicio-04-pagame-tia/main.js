"use strict";
// Precio a pagar por cada comensal
const sumElement = document.querySelector(".suma");
const totalPrice = 128;
const numberOfCustomers = 9;
const specialPrice = 2;
sumElement.innerHTML = (totalPrice - specialPrice) / numberOfCustomers;

/* Mensaje que aparece en la consola al loguear sumElement
console.log(sumElement);
<p class=​"suma">​14​</p>​ */

/* Precio a pagar por Ana
const totalPrice = 128;
const numberOfCustomers = 9;
const specialPrice = 2;
sumElement.innerHTML = (totalPrice + specialPrice) / numberOfCustomers;

Mensaje que aparece en la consola al loguear sumElement
console.log(sumElement);
<p class=​"suma">​14.444444444444445​</p>​ */
