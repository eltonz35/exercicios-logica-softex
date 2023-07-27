/**
 * Escreva um programa que receba uma lista de números e imprima apenas os números pares.
 */

const lista = [1, 2, ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log("Os numeros pares são: ")
for (i = 0; i <= lista.length; i++) {
    if(lista[i] % 2 == 0) {
        console.log(lista[i]);
    }
}