"use strict";

let year = 2020;
year = 2021;
year = 2024;
year = 2029;

if (year % 4 === 0) {
  console.log(`Estás en un año bisiesto`) 
} else if (year % 4 === 1) {
  console.log(`El próximo año bisiesto será ${year + 3}`) 
} else if (year % 4 === 2) {
  console.log(`El próximo año bisiesto será ${year + 2}`) 
} else if (year % 4 === 3) {
  console.log(`El próximo año bisiesto será ${year + 1}`)
}
