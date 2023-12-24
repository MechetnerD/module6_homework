"use strict";

function consoleNumbers(alpha, omega) {
  let number = alpha;

  const intervalId = setInterval(function () {
    console.log(number);
    if (number === omega) {
      clearInterval(intervalId);
    }
    number++;
  }, 1000);
}
