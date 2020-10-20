"use strict";

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const greetings = (name) => `Bienvenida ${name}`;
const personalGreetings = names.map(greetings);
console.log(personalGreetings);
