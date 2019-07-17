//Faça um Programa que leia um vetor de 5 números inteiros e mostre-os

let numero = new Array(1);

for (let i = 0; i < numero.length; i++) {
    numero[i] = new Array(5);
    numero[i][1] = parseInt(prompt('Digite o primeiro número ' + [i]));
    numero[i][2] = parseInt(prompt('Digite o segundo número ' + [i]));
    numero[i][3] = parseInt(prompt('Digite o terceiro número ' + [i]));
    numero[i][4] = parseInt(prompt('Digite o quarto número ' + [i]));
    numero[i][5] = parseInt(prompt('Digite o quinto número ' + [i]));
    alert(numero);
}

