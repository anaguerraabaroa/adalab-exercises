"use strict";

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

// Cambiando el orden de impresión en consola:
console.log(secretLetter); // devuelve "y" porque está llamando a la primera variable antes de entrar en la función
console.log(mySecretLetter()); // devuelve "x" porque llama a la función y el valor de la variable ha sido alterado dentro de la función





