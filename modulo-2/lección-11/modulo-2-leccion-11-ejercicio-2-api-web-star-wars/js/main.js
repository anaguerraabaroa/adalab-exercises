"use strict";

const btnElement = document.querySelector(".js-button");
const inputElement = document.querySelector(".js-input");

function getCharacters() {
  let inputValue = inputElement.value;
  fetch("https://swapi.dev/api/people/?search=" + inputValue)
    .then((response) => response.json())
    .then((data) => {
      let list = document.querySelector(".js-list");
      list.innerHTML = `<li>Personaje: ${data.results[0].name}</li><li>Género: ${data.results[0].gender}</li>`;
    });
}

btnElement.addEventListener("click", getCharacters);
