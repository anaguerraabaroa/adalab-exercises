"use strict"

const titleElement = document.querySelector(".title");
const buttonElement = document.querySelector(".button");
const selectElement = document.querySelector(".select");
const mainElement = document.querySelector(".main");

function updateClick() {
  const selectValue = select.value;
  titleElement.innerHTML = selectValue;
  const random = parseInt(Math.random() * 100); 
  if (random % 2 === 0) {
    mainElement.classList.remove("mainBackgroundColor2");
  } else if (random % 2 === 1)
  mainElement.classList.add("mainBackgroundColor2")
}

buttonElement.addEventListener("click", updateClick);