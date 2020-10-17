"use strict";

// 1.- Declaramos una constante que es un array con objetos dentro

const adalabers = [
  {
    name: "María",
    age: 29,
    position: "Diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    position: "Ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    position: "Periodista",
  },
  {
    name: "Rocío",
    age: 25,
    position: "Actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    position: "Diseñadora",
  },
];

// 2.- Declaramos una función que devuelva el número de adalabers en el listado

function countAdalabers(adalabers) {
  return adalabers.length;
}

console.log(countAdalabers(adalabers));

// 3.- Declaramos una función que devuelva la media de edad del listado

function averageAge(adalabers) {
  let average = 0;
  for (let i = 0; i < adalabers.length; i++) {
    average += adalabers[i].age / adalabers.length;
  }
  return average;
}

console.log(averageAge(adalabers));

// 4.- Declaramos una función que devuelva el nombre de la adalaber más jóven

function theYoungest(adalabers) {
  let minAge = adalabers[0].age;
  let youngestAdalaber = "";
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].age <= minAge) {
      minAge = adalabers[i].age;
      youngestAdalaber = adalabers[i].name;
    }
  }
  return youngestAdalaber;
}

console.log(theYoungest(adalabers));

// 5.- Declaramos una función que devuelva el número de adalabers que son diseñadoras

function countDesigners(adalabers) {
  let numberOfDesigners = 0;
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].position === "Diseñadora") {
      numberOfDesigners += 1;
    }
  }
  return numberOfDesigners;
}

console.log(countDesigners(adalabers));
