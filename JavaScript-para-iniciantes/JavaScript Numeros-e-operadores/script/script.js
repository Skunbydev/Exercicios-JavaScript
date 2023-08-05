// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log (total);
// Crie duas expressões que retornem NaN
var Nan = 20;
var Nan2 = "10s"
console.log (Nan + -Nan2);
console.log (Nan + +Nan2);
// Somar a string '200' com o número 50 e retornar 250
const valor = "200";
var valorSoma = 50;

console.log (+valor + valorSoma);
// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5; 

console.log (++incremento);


// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
