/**
 *  Escreva um programa que calcule a média de très números informados pelo usuário.
 */

const prompt = require("prompt-sync")();

console.log("Informe três numeros positivos válidos! \n");

let numero1 = Number(prompt("Informe o primeiro numero: "));
let numero2 = Number(prompt("Informe o segundo numero: "));
let numero3 = Number(prompt("Informe o terceiro numero: "));
let media = (numero1 + numero2 + numero3)/3;

console.log(`A média dos numeros informados é: ${media}`);