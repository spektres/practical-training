"use strict"

function sumOfDigits(num) {
    if (num === 0) {
        return 0;
    }
    let sum = sumOfDigits(Math.floor(num % 10));
    num /= 10;
    return sum;
}

const result = sumOfDigits(123);
console.log(result);