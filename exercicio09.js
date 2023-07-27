/**
 * Faça um programa que converta graus Celsius para Fahrenheit.
 */

const prompt = require("prompt-sync")();

let temperatura = prompt("Insira um valor válido de temperatura em Celsius: ")

let formula = (( temperatura * (9/5)) + 32);

console.log(`A temperatura em Fahrenheit é ${formula}`);