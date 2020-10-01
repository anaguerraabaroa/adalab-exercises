"use strict";
const userAge = document.querySelector(".user_age");
const totalHours = 24 * 365 * parseInt(userAge.innerHTML);
userAge.innerHTML = totalHours;

/* Preguntar porque al loguear no cambia los datos
console.log("Has vivido ${totalHours} horas");
Has vivido ${totalHours} horas */
