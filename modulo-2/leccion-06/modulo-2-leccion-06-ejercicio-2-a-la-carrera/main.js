"use strict";

const descriptionAction = document.querySelector(".description");

const sport = {};
sport.action = () => `Estoy corriendo`;
console.log(sport.action());
sport.action2 = (distance) => `Estoy corriendo un maraton de ${distance} km`;
console.log(sport.action2(50));

// sport.action();
// sport.action2(50);
