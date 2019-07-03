let farenheit = prompt('Informe a temperatura em farenheit');

farenheit = parseFloat(farenheit);

let celcius = 5 * (farenheit - 32) / 9;

alert (farenheit.toFixed(2) + '°F correspondem a ' + celcius.toFixed(2) + '°C');



//alert ( é para mostrar alguma coisa)
//prompt (é pra pedir alguma coisa)
//parseInt (transforma o prompt em número)
//; (ponto e virgula usar sempre no final da tag)
//pi (é uma constatnte 3.145254;)
//const PI = 3.141524; (tag)
//** (potencia)
//Math (dar o retorno de PI)
