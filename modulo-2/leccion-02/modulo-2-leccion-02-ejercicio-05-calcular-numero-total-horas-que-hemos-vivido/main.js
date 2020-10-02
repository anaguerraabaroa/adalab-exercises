"use strict";
// Precio a pagar por cada comensal
const totalHours = document.querySelector(".sum");
const hoursPerDay = 24;
const daysPerYear = 365;
const age = 38;
const bisi = (age / 4) * hoursPerDay;
totalHours.innerHTML = hoursPerDay * daysPerYear * age + bisi;
console.log(totalHours);

/* Mensaje que aparece en la consola al loguear las constantes
console.log(hoursPerDay * daysPerYear * age + bisi);
332880 */
