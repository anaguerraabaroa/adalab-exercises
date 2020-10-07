"use strict";

const background = document.querySelector("body");

function backgroundColor() {
  if (event.key === "r") {
    background.classList.add("backgroundColor1");
    background.classList.remove("backgroundColor2");
  } else if (event.key === "m") {
    background.classList.add("backgroundColor2");
    background.classList.remove("backgroundColor1");
  } else {
    background.classList.remove("backgroundColor1");
    background.classList.remove("backgroundColor2");
  }
}

background.addEventListener("keydown", backgroundColor);
