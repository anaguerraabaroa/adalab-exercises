"use strict";

const input = document.querySelector(".js-input");
const user = document.querySelector(".js-user");
const repos = document.querySelector(".js-repos");
const img = document.querySelector(".js-img");
const button = document.querySelector(".js-button");

function getUserName() {
  let inputValue = input.value;
  fetch("https://api.github.com/users/" + inputValue)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-user").innerHTML = data.login;
      document.querySelector(".js-repos").innerHTML = data.public_repos;
      document.querySelector(".js-img");
      img.src = data.avatar_url;
      img.alt = `Imagen de ${inputValue}`;
    });
}

button.addEventListener("click", getUserName);
