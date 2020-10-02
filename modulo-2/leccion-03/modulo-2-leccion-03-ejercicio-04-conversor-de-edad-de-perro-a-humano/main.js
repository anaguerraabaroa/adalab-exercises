"use strict";

const agelElement = document.querySelector(".age");
const age = 2;

if (age === 1) {
  console.log("La edad del perro equivale a 15 años de humano");
} else if (age === 2) {
  console.log("La edad del perro equivale a 24 años de humano");
} else if (age >= 3) {
  console.log(
    "A partir del tercer año, cada año de perro equivale a 5 años de humano"
  );
}

/* El primer año de un perro equivale a 15 años de humano
        El segundo año de un perro equivale a nueve años de humano
        A partir del tercero, cada año de perro equivale a 5 años de humano. 
        'use strict';
        const oneYear = 15;
        const secondYear = 9;
        const thirdYear = 5;
        const dogYears = 5;
        
        if (dogYears === 1) {
          console.log(oneYear + ' años humanos');
        } else if (dogYears === 2) {
          console.log(oneYear + secondYear + ' años humanos');
        } else if (dogYears === 3) {
          console.log(oneYear + secondYear + thirdYear + ' años humanos');
        } else if (dogYears > 3) {
          //sumamos los valores hasta 3 años + (edad perro - 3 primeros años) * (5 años)
          let yearsHuman = oneYear + secondYear + thirdYear + (dogYears - 3) * thirdYear;
          console.log(yearsHuman + ' años humanos');
        }
        */
