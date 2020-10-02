"use strict";

const numberlElement = document.querySelector(".number");
const numberValue = 19;

if (numberValue === 0) {
  console.log("El número es 0");
} else if (numberValue < 0) {
  console.log("El número es negativo");
} else if (numberValue + 2 > 13 && numberValue + 2 <= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (numberValue > 20 && numberValue < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}
