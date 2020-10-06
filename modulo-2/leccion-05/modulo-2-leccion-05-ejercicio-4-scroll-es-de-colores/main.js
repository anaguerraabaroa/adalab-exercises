"use strict";

const divElement = document.querySelector(".container");

window.addEventListener("scroll", function getBackgroundColor() {
  if (window.scrollY < 250) {
    divElement.classList.add("backgroundColor1");
  } else if (window.scrollY >= 250) {
    divElement.classList.add("backgroundColor2");
  }
});
