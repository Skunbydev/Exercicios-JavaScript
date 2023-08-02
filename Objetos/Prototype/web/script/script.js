// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade + ` anos`;
}
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const luiz = new Pessoa('Luiz Felipe', 'Santos de Lima Alves', 20);
console.log (luiz);
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

//item(index)
//length

//item(index): Retorna o elemento HTML na posição index da coleção.
// namedItem(name): Retorna o elemento HTML com o atributo name especificado (apenas para coleções com atributos name).
// length: Retorna o número de elementos HTML na coleção.

// getElementById(id): Retorna o elemento HTML com o atributo id especificado.
// getElementsByClassName(className): Retorna uma coleção de elementos HTML que têm a classe especificada.
// getElementsByTagName(tagName): Retorna uma coleção de elementos HTML que têm a tag especificada.
// querySelector(selector): Retorna o primeiro elemento que corresponde ao seletor CSS especificado.
// querySelectorAll(selector): Retorna todos os elementos que correspondem ao seletor CSS especificado em uma NodeList.

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //lista propeamente dita
li.click;  // click
li.innerText; // conteudo dentro da LI
li.value; // valor dentro da li
li.hidden; // esconder
li.offsetLeft; // lado direito, distancia
li.click(); //efeito de click, amigo

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//String bolleana


// Exemplo de uso real, de um prototype.

function Animal (nome) {
    this.nome = nome;
}

Animal.prototype.gritar = function () {
    return `A ${this.nome}, está gritando e fazendo escândalo.`
}

const cadela = new Animal ('Belinha');
console.log (cadela.gritar());

