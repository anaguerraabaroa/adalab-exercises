"use strict";

const buttonElement = document.querySelector(".js-btn");

function getEventType(event) {
  console.log(event);
  console.log(event.type);
}

buttonElement.addEventListener("click", getEventType);
