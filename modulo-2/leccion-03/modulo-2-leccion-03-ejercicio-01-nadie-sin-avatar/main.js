"use strict";

// // Solución paso 1
// const avatarElement = document.querySelector(".user__avatar");
// const DEFAULT_AVATAR = "http://placehold.it/300x300";
// let userAvatar = "http://www.fillmurray.com/300/300";
// avatarElement.setAttribute("src", userAvatar);

// // Solución paso 2
// const avatarElement = document.querySelector(".user__avatar");
// const DEFAULT_AVATAR = "http://placehold.it/300x300";
// let userAvatar = "";
// avatarElement.setAttribute("src", userAvatar);

// Solución paso 3: cuando eliminamos el valor de la variable (let userAvatar = "") desaparece la imagen de fondo y aparece la imagen por defecto
const avatarElement = document.querySelector(".user__avatar");
const DEFAULT_AVATAR = "http://placehold.it/300x300";
let userAvatar = "http://www.fillmurray.com/300/300";
avatarElement.setAttribute("src", userAvatar || DEFAULT_AVATAR);
// avatarElement.src = userAvatar || DEFAULT_AVATAR;
console.log(avatarElement);
