"use strict";

// Declaramos un array vacío para completar sus elementos con el método array.push como pide el enunciado del ejercicio
const arrayNumbers = [];

// El bucle genera los elementos que van a conformar el array y que incluimos dentro del mismo con el método array.push
// El enunciado indica que el array debe contener números de 1 a 100, por lo que el valor inicial será 1 y la condición debe cumplirse siempre que los números sean menor o igual a 100 y el recorrido pase por todos los elementos del array
// Metemos el bucle dentro de la función para que al invocarla nos devuelva el array con sus elementos dentro
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    arrayNumbers.push(i);
  }
  return arrayNumbers;
}

// Invocamos a la función
get100Numbers();

// Y logueamos para confirmar en consola que los elementos se han añadido al array
console.log(arrayNumbers);

// Partiendo del ejercicio anterior declaramos una nueva función para invertir el orden de los elementos del array
// Para ello declaramos una nueva constante que invierte el orden de los elementos del array utilizando el método array.reverse
// Utilizamos la función inicial como elemento del array a modificar porque esta función devuelve como resultado los elementos del array a los que queremos invertir el orden
function getReversed100Numbers() {
  const arrayReverse = arrayNumbers.reverse(get100Numbers);
  return arrayReverse;
}

// Invocamos a la función
getReversed100Numbers();

// Y logueamos para confirmar en consola que el orden de los elementos del array se ha invertido
console.log(arrayNumbers);
