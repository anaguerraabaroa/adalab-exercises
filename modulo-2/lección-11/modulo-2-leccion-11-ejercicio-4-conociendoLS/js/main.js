"use strict";

// 1.- Declaramos las constantes sobre los elementos que van a intervenir en el proceso
const inputElement = document.querySelector(".js-input");
const paragraphElement = document.querySelector(".js-paragraph");

// 3.- Declaramos la función handler
// 3.1.- Dentro incluimos el método para almacenar datos en local con dos parámetros: el nombre que damos a los datos y los datos que queremos
// almacenar, en este caso el valor del input
// 3.2.- Pintamos el valor del input dentro del párrafo como pedía el enunciado
function getUserName() {
  localStorage.setItem("name", inputElement.value);
  paragraphElement.innerHTML = inputElement.value;
  useUserName();
}

// // 2.- Declaramos el evento que activará la función handler
inputElement.addEventListener("keyup", getUserName);

// 4.- Declaramos la función que va a utilizar los datos almacenados en local
// 4.1.- Pintamos en el valor del input el método para utilizar los datos almacenados en local con el nombre que le hemos dado a los datos
// 4.2.- Pintamos dentro del párrafo el método para utilizar los datos almacenados en local con el nombre que le hemos dado a los datos
function useUserName() {
  inputElement.value = localStorage.getItem("name");
  paragraphElement.innerHTML = localStorage.getItem("name");
}

// 4.3.- Invocamos a la función desde fuera para que se ejecute
useUserName();

// // 5.- Declaramos la función para borrar los datos almacenados en local
function removeUserName() {
  localStorage.removeItem("name");
}

// // 5.1.- Invocamos a la función desde fuera para que se ejecute
removeUserName();
