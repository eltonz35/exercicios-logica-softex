/**
 * Faça um programa que verifique se um número é par ou impar
 */

const prompt = require("prompt-sync")();

let numero = prompt("Insira um numero positivo: ");

if(numero % 2 == 0) {
    console.log(`O numero ${numero} é par`);
} else {
    console.log(`O numero ${numero} é impar`);
}