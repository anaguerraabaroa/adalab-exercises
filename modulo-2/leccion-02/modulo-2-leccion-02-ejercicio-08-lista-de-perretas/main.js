"use strict";
const listElement1 = document.querySelector(".list_item1");
const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";
listElement1.innerHTML = ` <div class="list_item1"><img src="${firstDogImage}" alt="Dina"/>
<div>${firstDogName}</div></div>`;

const listElement2 = document.querySelector(".list_item2");
const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";
listElement2.innerHTML = ` <div class="list_item2"><img src="${secondDogImage}" alt="Luna"/>
<div>${secondDogName}</div></div>`;

const listElement3 = document.querySelector(".list_item3");
const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";
listElement3.innerHTML = ` <div class="list_item3"><img src="${thirdDogImage}" alt="Lana"/>
<div>${thirdDogName}</div></div>`;
