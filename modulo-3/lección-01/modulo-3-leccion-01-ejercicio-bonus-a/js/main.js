"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }

  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = side;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const finalSquare = new Square(4);
const finalTriangle = new Triangle(4, 3);
console.log(finalSquare.perimeter());
console.log(finalSquare.area());
console.log(finalTriangle.perimeter());
console.log(finalTriangle.area());
