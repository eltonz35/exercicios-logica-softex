/**
 * Faça um programa que verifique se uma palavra é um palindromo
 * (se pode ser lide da mesma forma de trás para frente).
 */

const prompt = require("prompt-sync")();

console.log("Verificar se uma palavra é palindromo! ")

let texto = prompt("Digite alguma palavra: ");

const palindromo = texto.split("")
    .reverse()
    .join("");

if (palindromo == texto) {
    console.log("A palavra digitada é um palindromo!");
} else {
    console.log("A palavra digitada não é um palindromo!");
}