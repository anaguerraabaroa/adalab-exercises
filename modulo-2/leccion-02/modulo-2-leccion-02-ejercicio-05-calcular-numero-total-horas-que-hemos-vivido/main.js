"use strict";
const totalHours = document.querySelector(".sum");
const hoursPerDay = 24;
const daysPerYear = 365;
const age = 38;
totalHours.innerHTML = hoursPerDay * daysPerYear * age;
console.log(totalHours);

/* Mensaje que aparece en la consola al loguear las constantes
console.log(hoursPerDay * daysPerYear * age);
332880 */
