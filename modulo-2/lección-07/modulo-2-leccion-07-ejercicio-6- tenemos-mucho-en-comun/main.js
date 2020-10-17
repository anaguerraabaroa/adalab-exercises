"use strict";

// 1.- Declaramos las constantes sobre cada uno de los elementos que van a intervenir en el ejercicio
const input1Element = document.querySelector(".input1");
const input2Element = document.querySelector(".input2");
const btnElement = document.querySelector(".btn");

// 3.- Declaramos el array vacío que completará la función
const movies = [];

// 4.- Declaramos la función que recogerá el valor de los inputs indicando el índice que ocupará cada uno dentro del array
// y con un bucle recorreremos el array para pintar en consola el mensaje por cada uno de los elementos del array
function getFavouriteMovies() {
  movies[0] = input1Element.value;
  movies[1] = input2Element.value;
  console.log(movies);
  for (const favouriteMovies of movies) {
    console.log(
      `¡A mí también me encantó ${favouriteMovies}! Tenemos mucho en común, humana.`
    );
  }
}

// 2.- Declaramos el evento que activará la función handler que modificará los datos del array
btnElement.addEventListener("click", getFavouriteMovies);
