"use strict";

function getSumm(x) {
  return function (y) {
    return x + y;
  };
}

const sum1 = getSumm(12);
console.log(sum1(53));
