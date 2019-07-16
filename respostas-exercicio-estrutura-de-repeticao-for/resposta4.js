//Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento
//de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa
//que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a
//população do país B, mantidas as taxas de crescimento.

let populacaoA = 80000;
let populacaoB = 200000;

const taxaA = 3 / 100;
const taxaB = 1.5 / 100;

let qtdAnos = 0;

for (let i = 1; i < 100; i++) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    if (populacaoA >= populacaoB) {
        qtdAnos = i;
        break
    }
}
alert('População A: ' + populacaoA + '\n' + 'População B: ' + populacaoB + '\n' + 'Quantidade de Anos: ' + qtdAnos);