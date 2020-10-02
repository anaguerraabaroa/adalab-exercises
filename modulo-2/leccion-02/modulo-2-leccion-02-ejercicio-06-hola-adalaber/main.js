"use strict";
const greeting = document.querySelector(".greeting");
const greetingInner1 = "Hola Ana, ";
const greetingInner2 = "encantada de conocerte";
greeting.innerHTML = greetingInner1 + greetingInner2;
console.log(greeting);

/*Mensaje que aparece en la consola al loguear las constantes
console.log(greetingInner1+greetingInner2);
Hola Ana, encantada de conocerte */
