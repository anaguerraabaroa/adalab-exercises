"use strict";

function getEl(selector) {
  return document.querySelector(selector);
}

const h1El = getEl('.title');
console.log(h1El);

const h2El = getEl('.subtitle');
console.log(h2El);

const pEl = getEl('.text');
console.log(pEl);