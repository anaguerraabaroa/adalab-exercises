"use strict";

function getIva(price) {
  const iva = price * 0.21;
  const total = price + iva;
  console.log(`Precio sin IVA: ${price}; IVA: ${iva}; Total: ${total}`);
}

getIva(100);

// ("use strict");

// function getIva(price) {
//   const iva = price * 0.21;
//   const total = price + iva;
//   const texto = `Precio sin IVA: ${price}; IVA: ${iva}; Total: ${total}`;
//   return texto;
// }

// const paragraph = document.querySelector(".js-text");
// paragraph.innerHTML = getIva(100);
