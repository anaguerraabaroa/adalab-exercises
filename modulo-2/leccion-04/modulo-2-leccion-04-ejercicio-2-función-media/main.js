"use strict";

function media(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const amount = media(5, 6, 4, 2);
// const amount = media(4, 3, 9, 8);
// const amount = media(500, 2, 500, 100);

console.log("El valor de la media es", amount);
