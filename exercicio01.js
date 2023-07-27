/**
 * Crie um programa que solicite o nome do usuário e, em seguida,
 *  imprima uma mensagem personalizada com o nome inserido.
 */

const prompt = require("prompt-sync")();

let nome = prompt("Insira o seu nome: ");

console.log(`Bem vindo ${nome}! `);