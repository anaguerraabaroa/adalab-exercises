"use strict";

// Ejercicio a

// const numbers = [2 , 4, 6, 8, 10];

// let media = 0;

// for (let i = 0; i < numbers.length; i++ ) {
//   media += numbers[i]/numbers.length;
// }

// console.log("La media de los números es " + media);

// Ejercicio b

// const numbers = [2 , 4, 6, 8, 10];
// numbers[5] = 12;

// let media = 0;

// for (let i = 0; i < numbers.length; i++ ) {
//   media += numbers[i]/numbers.length;
// }

// console.log("La media de los números es " + media);


// Ejercicio c

let numbers = [2 , 4, 6, 8, 10];

function average(n) {
  let media = 0;
  for (let i = 0; i < n.length; i++) {
    media += n[i]/n.length;
  } 
  return media
}

console.log(`La media de los números es ${average(numbers)}`);