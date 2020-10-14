"use strict";

// Declaramos un array vacío para completar sus elementos con el método array.push como pide el enunciado del ejercicio
const array = [];

// El bucle genera los elementos que van a conformar el array y que incluimos dentro del mismo con el método array.push
// El enunciado indica que el array debe contener números de 1 a 100, por lo que el valor inicial será 1 y la condición debe cumplirse 100 veces
// Metemos el bucle dentro de la función para que al invocarla nos devuelva el array con sus elementos dentro
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    array.push(i);
  }
  return array;
}

get100Numbers();

// Logueamos para confirmar en consola que el array está completo
console.log(array);
