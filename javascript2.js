"use strict";

function isPrimeNumber(number) {
  if (number <= 1 || number > 1000) {
    console.log("Данные неверны.");
    return;
  }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        console.log(`${number} не является простым числом`);
        return;
      }
    }
  
  console.log(`${number} является простым числом`);
}

