// Import module
const _ = require("lodash");

// Variable
const students = [
  {
    name: "Sofía",
    promo: "k",
  },
  {
    name: "María",
    promo: "l",
  },
  {
    name: "Lucía",
    promo: "j",
  },
  {
    name: "Julia",
    promo: "l",
  },
];

// Method
const sortedStudentsList = _.sortBy(students, ["promo", "name"]);

// Result
console.log(sortedStudentsList);
