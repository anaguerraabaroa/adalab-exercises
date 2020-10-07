"use strict";

const text = document.querySelector(".text");

text.addEventListener("mouseover", function getNewText() {
  text.innerHTML =
    text.innerHTML +
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odit deserunt tenetur eveniet dolor consequatur distinctio, expedita ullam, tempore deleniti excepturi dolore repudiandae! Aliquam aut incidunt vel, quae blanditiis optio!";
  text.removeEventListener("mouseover", getNewText);
});
