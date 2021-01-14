// Import module
const math = require("./math");

// Variables
const num1 = 4;
const num2 = 2;

// Methods
const sumTotal = math.sumExp.sum(num1, num2);
const substractTotal = math.substractExp.substract(num1, num2);

// Results
console.log(`The sum result is: ${sumTotal}`);
console.log(`The substract result is: ${substractTotal}`);
