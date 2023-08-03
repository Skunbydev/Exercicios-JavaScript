// Crie uma função que verifique
// corretamente o tipo de dado
// const verificaTipoDado = function (verificador) {
//   const verificado = typeof verificador;
//   return verificado;
// };

// const teste = verificaTipoDado('gay');
// console.log(teste);

function verificaDado (dado) {
  return Object.prototype.toString.call(dado);
}

console.log (verificaDado('String'));



// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: 4,
}

Object.defineProperties(quadrado, {
  lados: {
    configurable: false,
    writable: false,
  }
})



// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333',
}
Object.defineProperties(configuracao, {
  width: {
    configurable: false,
    writable: false,
  },
  height: {
    configurable: false,
    writable: false,
  },
  background: {
    configurable: false,
    writable: false,
  }

})

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

Object.getOwnPropertyNames(Array.prototype);
Object.getOwnPropertyNames(String.prototype);