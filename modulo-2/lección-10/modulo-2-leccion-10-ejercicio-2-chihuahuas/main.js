"use strict";

// Respuesta a

const btn = document.querySelector(".js-dog");
const img = document.querySelector(".img");

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".img");
      img.src = data.message;
      img.alt = "Un perro";
    });
}

btn.addEventListener("click", getDogImage);

// Respuesta b
const btn2 = document.querySelector(".js-dog2");
btn2.addEventListener("click", getDogImage);
