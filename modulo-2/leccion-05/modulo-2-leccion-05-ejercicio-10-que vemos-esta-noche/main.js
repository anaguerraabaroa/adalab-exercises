"use strict";

const button = document.querySelector(".button");
const movieList = document.querySelector(".movieList");

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

function getMovieList() {
  movieList.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`
}

button.addEventListener("click", getMovieList)


function getMovieTitle() {
  const movieTitle = event.target.innerHTML
  console.log(movieTitle);
}

movieList.addEventListener("click", getMovieTitle)
