"use strict";

Number.parseInt("10 или 20", 10); // 10


let str = "26.86"
let num = Number.parseInt(str);
console.log(num);


// матемтическое округление
let numberRound = 22.45
console.log(numberRound); // 22.45
console.log(Math.round(numberRound)) // 22
console.log(Math.round(22.98)) // 23
// округление вниз
console.log(Math.floor(numberRound)) // 22
console.log(Math.floor(22.98)) // 22
// вверх
console.log(Math.ceil(numberRound)) //23
// отбрасывает дробную часть
console.log(Math.trunc(numberRound)) //22

console.log("=========================")

// ВАЖНО! Правильное округление
let num1 = 23.567454;
console.log(num1);
console.log(num1 * 100);
console.log(Math.trunc(num1 * 100));
console.log(Math.trunc(num1 * 100) / 100);

//для продолжения работы с числом!!
Math.trunc(num1 * 100) / 100; // Так правильно оставлять нужные знаки после точки

//только если показать число.
console.log(num1.toFixed(2)); // Но мы получаем строку!!
