"use strict";

const filmsElement = document.querySelector(".films");

//Ejercicio antes de incluirlo dentro de la función consoleando cada paso para comprobar que el array va cambiando de acuerdo al enunciado:
const films = ["Vacaciones en Roma", "Sabrina", "Desayuno con Diamantes"];
console.log(films);
films[3] = "My Fair Lady";
console.log(films);
films[3] = "Cómo robar un millón y...";
console.log(films);
films[1] = "Dos en la carretera";
console.log(films);

function workWithMovies() {
  const films = ["Vacaciones en Roma", "Sabrina", " Desayuno con Diamantes"];
  films[3] = "My Fair Lady";
  films[3] = " Cómo robar un millón y...";
  films[1] = " Dos en la carretera";
  return films;
}

console.log(`Mis películas favoritas de Audrey Hepburn son:`, workWithMovies());
filmsElement.innerHTML =
  `Mis películas favoritas de Audrey Hepburn son: ` + workWithMovies();
