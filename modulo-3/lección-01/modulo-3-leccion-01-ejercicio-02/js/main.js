"use strict";

class Square {
  constructor(side) {
    this.side = side;
    this.sidenumber = 4;
  }

  perimeter() {
    return this.side * this.sidenumber;
  }
  area() {
    return this.side * this.side;
  }
}

const Square1 = new Square(1);
const Square2 = new Square(3);
const Square3 = new Square(7);
console.log(Square1.perimeter());
console.log(Square1.area());
console.log(Square2.perimeter());
console.log(Square2.area());
console.log(Square3.perimeter());
console.log(Square3.area());
