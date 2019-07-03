let valorPorHoraTrabalhada = prompt('Informe o valor da sua hora trabalhada');

valorPorHoraTrabalhada = parseFloat(valorPorHoraTrabalhada);

let quantidadeHorasTrabalhadas = prompt('Informe quantas horas você trabalhou no mês');
quantidadeHorasTrabalhadas = parseInt(quantidadeHorasTrabalhadas);

let salarioMes = valorPorHoraTrabalhada * quantidadeHorasTrabalhadas;

alert('Seu salário neste mês é ' + salarioMes);


//alert ( é para mostrar alguma coisa)
//prompt (é pra pedir alguma coisa)
//parseInt (transforma o prompt em número)
//; (ponto e virgula usar sempre no final da tag)
//pi (é uma constatnte 3.145254;)
//const PI = 3.141524; (tag)
//** (potencia)
//Math (dar o retorno de PI)
