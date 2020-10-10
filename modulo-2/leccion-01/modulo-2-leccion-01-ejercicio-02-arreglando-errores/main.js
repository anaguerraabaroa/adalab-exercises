"use strict";
const street = document.querySelector("h1")

/* La declaración de constantes no admite reasignación de valores
const street.innerHTML = "Esto es una calle";
homeAddress = "Esto es otra calle"; */

// Los valores se pueden cambiar utilizando variables
let homeAddress = "Esto es una calle";
homeAddress = "Esto es otra calle";
street.innerHTML = homeAddress;
console.log(street.innerHTML);
