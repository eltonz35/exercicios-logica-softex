/**
 * Escreva um programa que receba uma lista de números e retorne o maior e o menor valor.
 */

const lista = [1, 2, ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let maior = 0;
let menor = 0;

for (i = 1; i < lista.length; i++) {
    if(lista[i] > lista[maior]) {
        maior = i;
    } else if (lista[i] < lista[menor]) {
        menor = i;
    }
}

console.log(`Maior elemento: ${lista[maior]}`);
console.log(`Menor elemento: ${lista[menor]}`);