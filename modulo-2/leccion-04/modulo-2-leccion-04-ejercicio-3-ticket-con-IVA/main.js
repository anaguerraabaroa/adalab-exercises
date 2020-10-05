"use strict";

function price(number) {
  return number;
}

const number = 20;
const IVA = (number * 21) / 100;
const priceWoIVA = number - IVA;
const priceResult =
  "Precio sin IVA: " + priceWoIVA + ", IVA: " + IVA + " y Total: " + number;

console.log(priceResult);
