"use strict"

let input = "cold";
const weather = input.toLowerCase().trim();

if (weather === "rainy"){
    console.log("возьмите зонт");
} else if (weather === "sunny"){
    console.log("возьмите очки");
} else if (weather === "cold"){
    console.log("одевайтесь теплее");
} else {
    console.log("хорошего вам дня");
}