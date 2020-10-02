"use strict";

const controlElement = document.querySelector(".control__text");
const name = "Ana Guerra";
// const name = "Ana Castrillo";

if (name === "Ana Guerra") {
  console.log(`Bienvenida, ${name}`);
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado"
  );
}
