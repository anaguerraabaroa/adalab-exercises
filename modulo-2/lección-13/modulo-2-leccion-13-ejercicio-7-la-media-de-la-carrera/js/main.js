"use strict";

const times = [56, 9, 45, 28, 35];

const totalTimes = times.reduce((acc, time) => acc + time);
const average = totalTimes / times.length;

console.log(average);
