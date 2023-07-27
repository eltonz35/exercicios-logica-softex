/**
 * Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado.
 */

const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Insira o primeiro numero: "));
let numero2 = Number(prompt("Insira o segundo numero: "));
let soma = numero1 + numero2;

console.log(`A soma dos dois numeros é: ${soma}`);