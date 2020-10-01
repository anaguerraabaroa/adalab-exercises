"use strict";

const titleElement = document.querySelector(".title");
let listItem = document.querySelector(".list-item-1");
listItem = document.querySelector(".list-item-2");
titleElement.innerHTML = titleElement.innerHTML + listItem.innerHTML;
