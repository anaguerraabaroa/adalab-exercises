"use strict";

// Versión función normal
function multiplication(a, b) {
  return a * b;
}

const amount = multiplication(5, 6);
const amount = multiplication(4, 8);
const amount = multiplication(500, 2);

console.log("El valor de la multiplicación es", amount);

// Versión función arrow
const amount = (a, b) => `El valor de la multiplicación es: ${a * b}`;
console.log(amount(5,6));