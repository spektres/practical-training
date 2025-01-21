"use strict"

function maskCardNumber(num) {
    num = String(num);
    const lastNumbers = num.slice(-4);
    return `**** **** **** ${lastNumbers}`;
}

maskCardNumber(1234567890987654);