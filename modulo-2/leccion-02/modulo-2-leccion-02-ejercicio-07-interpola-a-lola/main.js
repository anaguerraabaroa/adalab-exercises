"use strict";
const greeting = document.querySelector(".greeting");
const greetingInner1 = "Hola Ana, ";
const greetingInner2 = "encantada de conocerte";
greeting.innerHTML = greetingInner1 + greetingInner2;

/* Mensaje que aparece en la consola al loguear interpolación de cadenas
console.log(`Esto es un mensaje de bienvenida: ${greetingInner1 + greetingInner2}`); 
Esto es un mensaje de bienvenida: Hola Ana, encantada de conocerte */
