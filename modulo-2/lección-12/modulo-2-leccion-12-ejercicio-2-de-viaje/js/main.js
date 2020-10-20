"use strict";

const selectList = document.querySelectorAll(".js-select");

for (let i = 0; i < selectList.length; i++) {
  selectList[i].addEventListener("change", getCityImages);
}

function getCityImages() {
  const imageElement = document.querySelector(".js-image");
  if (selectList[i].value === Madrid) {
    imageElement.setAttribute(
      "src",
      "https://fotos01.deia.eus/2020/10/19/690x278/madrid-paraiso-1.jpg"
    );
  }
}
