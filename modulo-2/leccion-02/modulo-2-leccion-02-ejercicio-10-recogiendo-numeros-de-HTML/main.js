"use strict";
const userAge = document.querySelector(".user_age");
const totalHours = 24 * 365 * parseInt(userAge.innerHTML);
const body = document.querySelector("body");
body.innerHTML = body.innerHTML + `<p> ${totalHours}</p>`;
console.log(totalHours);
