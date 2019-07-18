//Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

//Modelo 1
let numeros = [10,20,30,40,50,60,70,80];
let vetorInverso = [];
let contador = 0;

for (let i = numeros.length-1; i >= 0; i--) {
vetorInverso[contador] = numeros[i]; contador ++;

}
alert(vetorInverso);

//-------------------------------------------------------------------------------------

//Modelo 2
let numeros = [10,20,30,40,50,60,70,80];
let vetorInverso = numeros.reverse();

alert(vetorInverso);