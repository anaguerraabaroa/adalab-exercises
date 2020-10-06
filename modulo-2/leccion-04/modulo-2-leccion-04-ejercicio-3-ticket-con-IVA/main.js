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

// Funciones anónimas
// const getIvaAnonymous = function getIva(price) {
//   const iva = price * 0.21;
//   const total = price + iva;
//   const texto = `Precio sin IVA: ${price}; IVA: ${iva}; Total: ${total}`;
//   return texto;
// };

// console.log(getIvaAnonymous(100));

// Funciones Arrow
// const getIvaArrow = (price) => {
//   const iva = price * 0.21;
//   const total = price + iva;
//   const texto = `Precio sin IVA: ${price}; IVA: ${iva}; Total: ${total}`;
//   return texto;
// };

// console.log(getIvaArrow(100));
