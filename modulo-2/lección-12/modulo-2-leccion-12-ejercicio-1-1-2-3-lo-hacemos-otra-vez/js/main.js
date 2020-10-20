"use strict";

const numbers = [1, 2, 3];
const itemList = document.querySelector(".js-list");
for (let i = 0; i < numbers.length; i++) {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode(numbers[i]);
  newItem.appendChild(newContent);
  itemList.appendChild(newItem);
}
