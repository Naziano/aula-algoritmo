//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';

let nome = "";
for (let i = 0; i < 100; i++) {
    nome = prompt('Digite o nome').trim();
    let tamanhoNome = nome.length;
    if (tamanhoNome > 3) {
        break
    } else {
        alert('Nome Inválido');
    }
}
alert('Nome: ' + nome);


let idade = 0;
for (let i = 0; i < 100; i++) {
    idade = prompt('Digite a Idade').trim();
    idade = parseInt(idade);
    if (idade >= 0 && idade <= 150) {
        break
    } else {
        alert('Idade Inválida');
    }
}
alert('Idade: ' + idade);


let salario = 0;
for (let i = 0; i < 100; i++) {
    salario = prompt('Digite o salário').trim();
    salario = parseInt(salario);
    if (salario > 0) {
        break
    } else {
        alert('Salário Inválido');
    }
}
alert('Salario: ' + salario);


let sexo = '';
for (let i = 0; i < 100; i++) {
    sexo = prompt('Digite o sexo').toLowerCase().trim();
    if (sexo == 'm' || sexo == 'f'); {
        break;
    }
}
alert('Sexo: ' + sexo);


let estadocivil = '';
for (let i = 0; i < 100; i++) {
    estadocivil = prompt('Estado Civil').toLowerCase().trim();
    if (estadocivil == 'c' || estadocivil == 's' || estadocivil == 'v' || estadocivil == 'd'); {
        break;
    }
}
alert('Estado civil ' + estadocivil);


    // Operações Relacionais

    // > maior que
    // < menor que
    // >= maior ou igual a
    // <= menor ou igual a
   // == igual a
    // != diferente de

   // Operadores Lógico

   // || ou lógico (OR)
   // && É lógico (AND)
   // ! não lógico (NOT)

