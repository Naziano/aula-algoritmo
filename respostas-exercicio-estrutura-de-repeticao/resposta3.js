//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';

for (let i = 0; i < 100; i++) {
    let nome = parseFloat(prompt('Digite seu nome'));
    if (nome.length <= 3);
    alert('Digite seu nome novamente'); {
        break;
    }


    let idade = parseFloat(prompt('Digite sua idade'));
    if (idade < 0); {
        break;
    }

    
    let salario = parseFloat(prompt('Digite seu salário'));
    if (salario < 0); {
        break;
    }


    let sexo = parseFloat(prompt('Digite o sexo'));
    if (sexo != 'M' && sexo != 'm' && sexo != 'F' && sexo != 'f'); {
        break;
    }


    let estadocivil = parseFloat(prompt('Estado Civil'));
    if (estadocivil != 'c' && estadocivil != 'C' && estadocivil != 's' && estadocivil != 'S' && estadocivil != 'v' && estadocivil != 'V' && estadocivil != 'd' && estadocivil != 'D'); {
        break;
    }


    
}
    
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
    
