"use strict";
const userAge = document.querySelector(".user_age");
const totalHours = 24 * 365 * parseInt(userAge.innerHTML);
userAge.innerHTML = totalHours;
console.log(totalHours);
