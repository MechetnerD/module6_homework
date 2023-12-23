"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, null, true, "string"];

function checkArray(arr) {
  const result = {
    even: 0,
    odd: 0,
    other: 0,
  };

  for (const element of arr) {
    if (typeof element === "number") {
      const type = element % 2 === 0 ? "even" : "odd";

      result[type] += 1;
    } else {
      result.other += 1;
    }
  }

  return result;
}

const count = checkArray(arr);
console.log(count);
