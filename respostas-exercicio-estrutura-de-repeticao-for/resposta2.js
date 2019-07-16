//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

for (let i = 0; i < 100; i++) {
    let usuário = prompt('Digite o usuário');
    let senha = prompt('Digite a senha');
    if (usuário != senha) {
        break;
    }
    alert('Erro:\nUsuário ou Senha Inválido!');
}

alert('Login Efetivado');



