"use strict";

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side * side;
  }
}

const finalSquare = new Square();
console.log(finalSquare.perimeter(9));
console.log(finalSquare.area(9));
