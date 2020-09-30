"use strict";
const wrapperElement = document.querySelector(".wrapper");
const content1 = "<h1>Lorem ipsum</h1>";
const content2 = "<img src=http://via.placeholder.com/350x150></>";
const content3 =
  "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";
wrapperElement.innerHTML = content1 + content2 + content3;
