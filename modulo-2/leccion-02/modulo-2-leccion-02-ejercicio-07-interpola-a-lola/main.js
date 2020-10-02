"use strict";
const greeting = document.querySelector(".greeting");
const greetingInner1 = "Hola Ana, ";
const greetingInner2 = "encantada de conocerte";
greeting.innerHTML = greetingInner1 + greetingInner2;
console.log(
  `Esto es un mensaje de bienvenida: ${greetingInner1} ${greetingInner2}`
);
