"use strict"

let str = 'qWe';
console.log(str.toLowerCase());

let size = " Маленькая"

if (size === null || size === undefined || size.trim() === "") {
    console.log("Вы не выбрали размер!");
} else {
    const scb = size.trim().toLowerCase();

    if (scb === "маленькая") {
        console.log("Маленькая пицца стоит 800 руб.");
    } else if (scb === "средняя") {
        console.log("Средняя пицца стоит 1200 руб.");
    } else if (scb === "большая") {
        console.log("Большая пицца стоит 1500 руб.");
    } else {
        console.log("Такого размера у нас нет!");
    }
}