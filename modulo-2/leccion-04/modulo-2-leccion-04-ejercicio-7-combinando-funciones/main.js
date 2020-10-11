"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
  }
  return element;
}

function number(n) {
  if (n % 2 === 0)
  console.log("Este número es par");
  else if (n % 2 === 1)
    console.log("Este número es impar");
}

const pEl = getEl('.number').innerHTML;
const userAge = parseInt(pEl);
console.log(number(userAge));






