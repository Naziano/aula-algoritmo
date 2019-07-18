//Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

let texto = 'O rato roeu a roupa do rei';
let consoantes = [];
let x = 0;

for (let i = 0; i < texto.length; i++) {
    let codigoAsc = texto[i].toLowerCase().charCodeAt(0);

    if (codigoAsc >= 97 && codigoAsc <= 122) {
        switch(codigoAsc) {
            case 97://a
            case 101://e
            case 105://i
            case 111://o
            case 117://u
                break;
            default:
            consoantes[x] = texto[i]; x++;
            
        }
    }

}
alert(consoantes);
