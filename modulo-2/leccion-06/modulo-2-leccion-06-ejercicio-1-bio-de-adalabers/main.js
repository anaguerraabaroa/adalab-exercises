"use strict";

const descriptionAdalaber = document.querySelector(".description");

const adalaber = {
  name: "Susana",
  age: 34,
  position: "periodista",
};

// Sustituir los datos de la adalaber 1 por los de la adalaber 2:
adalaber.name = "Rocío";
adalaber.age = 25;
adalaber.position = "actriz";

// // Sustituir los datos de la adalaber 2 por los de la adalaber 3:
adalaber.name = "Ana";
adalaber.age = 38;
adalaber.position = "programadora frontend en proceso";

descriptionAdalaber.innerHTML = `Mi nombre es ${adalaber.name} tengo ${adalaber.age} años y soy ${adalaber.position}`;
