let resposta = prompt('Digite o turno que você estuda: \nM-Matutino\nV-Vespertino\nN-Noturno').toLowerCase().trim().charAt(0);

resposta = resposta.trim().charAt(0).toLowerCase();

switch(resposta) {

    case 'm':
    alert('Bom Dia!');
    break;

    case 'v':
    alert('Boa Tarde!');
    break;

    case'n':
    alert('Boa Noite!');
    break;

    default:
    alert('Opção Inválida!');
}