let letra = prompt('Digite uma letra do alfabeto');

let codigoAsc = letra.toLowerCase().trim().charCodeAt(0);

if (codigoAsc >= 97 && codigoAsc <= 122) {
    switch(codigoAsc) {

        case 97: case 101: case 105: case 111: case 117:
        alert('É uma VOGAL');
        break;

        default:
        alert('É uma CONSOANTE');

    }
} else {
    alert('Não é uma letra do Alfabeto');
}

