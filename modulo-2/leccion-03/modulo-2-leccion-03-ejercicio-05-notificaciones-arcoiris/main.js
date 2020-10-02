"use strict";
const title = document.querySelector("h1");
const message = document.querySelector("p");
const wrapper = document.querySelector("div");

if (wrapper.classList.contains("warning")) {
  console.log("warning");
  title.innerHTML = "Aviso";
  message.innerHTML = "Tenga cuidado";
} else if (wrapper.classList.contains("error")) {
  console.log("error");
  title.innerHTML = "Error";
  message.innerHTML = "Ha surgido un error";
} else if (wrapper.classList.contains("success")) {
  console.log("success");
  title.innerHTML = "Correcto";
  message.innerHTML = "Los datos son correctos";
}

// Se deben ir cambiando las clases en el html para ver los cambios
