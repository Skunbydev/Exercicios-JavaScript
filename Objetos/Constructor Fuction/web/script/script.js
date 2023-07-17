// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa


function initPessoas() {



  function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  Pessoas.prototype.dadosCallback = function () {
    return `${this.nome} ${this.sobrenome}${','} ${this.idade} ${'anos'}`
  }

  const luiz = new Pessoas('Luiz Felipe', 'Santos de Lima Alves', 20);
  console.log(luiz.dadosCallback());
}
initPessoas();

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection));
console.log(Object.getOwnPropertyNames(Document));

// Liste os construtores dos dados abaixo


const li = document.querySelector('li');

li; //HTMLELLEMENT
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // bollean
li.offsetLeft; // number
li.click(); // undefined



// Qual o construtor do dado abaixo:
 li.hidden.constructor.name; //string  