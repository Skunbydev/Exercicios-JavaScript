// Crie uma função para verificar se um valor é Truthy

function isTruthy(value) {
    return Boolean(value);
  }

  console.log (isTruthy(5));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

var lado = 2;

function perimetroQuadrado(lado) {
    return lado * 4; 
} 

console.log (perimetroQuadrado(lado));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
// Crie uma função que verifica se um número é par

function verificarPar (n) {
  if (n % 2 === 0) {
    return ('Número é par');
  } else {
    return ('Número é ímpar');
  } 
} console.log ('O ' +  verificarPar(4));




// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo

  