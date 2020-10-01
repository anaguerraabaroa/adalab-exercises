"use strict";
// Precio a pagar por cada comensal
const totalHours = document.querySelector(".sum");
const hoursPerDay = 24;
const daysPerYear = 365;
const age = 38;
totalHours.innerHTML = hoursPerDay * daysPerYear * age;

/* Mensaje que aparece en la consola al loguear sumElement
console.log(totalHours);
<p class=​"suma">​332880​</p>​ */

/* Mensaje que aparece en la consola al loguear las constantes
console.log(hoursPerDay * daysPerYear * age);
332880 */
