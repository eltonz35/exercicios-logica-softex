/**
 * Crie um programa que determine se um número é primo ou não.
 */

const prompt = require("prompt-sync")();

let numero = Number(prompt("Insira um numero positivo: "));

if (numero % 1 == 0 && numero % numero == 0) {  //Falta finalizar alguma restrição!!!
    console.log(`O numero ${numero} é primo`);
} else {
    console.log(`O numero ${numero} não é primo`);
}

