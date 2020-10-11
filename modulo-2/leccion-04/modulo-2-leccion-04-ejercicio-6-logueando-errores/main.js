"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
  }
  return element;
}

// Elemento <h1> - incluido en el HTML
const h1El = getEl('.title');
console.log(h1El);
// La consola devuelve <h1 class=​"title">​</h1>​

// Elemento <h2> - incluido en el HTML
const h2El = getEl('.subtitle');
console.log(h2El);
// La consola devuelve <h2 class=​"subtitle">​</h2>​

// Elemento <p> - incluido en el HTML
const pEl = getEl('.text');
console.log(pEl);
// La consola devuelve <p class=​"text">​</p>​

// Elemento <img> - no incluido en el HTML
const imgEl = getEl('.img');
console.log(imgEl);
// La consola devuelve "No existe ningún elemento con clase, id o tag llamado .img"
