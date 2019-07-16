//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let nota = 0;

for (let i = 0; i < 100; i++) {
    nota = parseFloat(prompt('Digite sua nota'));
    if (nota >= 0 && nota <= 10) {
        break;
    }
}
alert('A nota escolhida foi ' + nota);



