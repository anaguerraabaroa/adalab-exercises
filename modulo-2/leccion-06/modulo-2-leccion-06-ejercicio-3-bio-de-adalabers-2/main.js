"use strict";

const descriptionAdalaber = document.querySelector(".description");

const adalaber = {};
adalaber.name = "Susana";
adalaber.age = 34;
adalaber.position = "periodista";
adalaber.description = function description() {
  return (
    `Mi nombre es ` +
    this.name +
    `, tengo ` +
    this.age +
    ` años y soy ` +
    this.position
  );
};

console.log(adalaber.description());
