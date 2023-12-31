// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
// const seletorParagrafo = document.querySelectorAll ('p');
// const somaCaractere = Array.from(seletorParagrafo).reduce((acumulador, paragrafos) => {
//     return acumulador + paragrafos.innerHTML.length; //o ideal é usar textContent, mas também dá pra usar innerHTML. (o Inner html usará tudo, incluindo as tags.)
// }, 0); // é o valor inicial do acumulador, 0, 01...

//Solucao do professor:

const seletorParagrafo = document.querySelectorAll('p');
const somaCaractere = Array.prototype.reduce.call(seletorParagrafo, (acumulador, paragrafo) => {
    return acumulador + paragrafo.innerText.length;
}, 0 )

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento (tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

// exemplo de uso: 
 console.log (criarElemento('li', 'azul', 'Esse é o conteúdo'));

 
// // Crie uma nova função utilizando a anterior como base
// // essa nova função deverá sempre criar h1 com a
// // classe titulo. Porém o parâmetro conteudo continuará dinâmico

// const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
// console.log (h1Titulo('Cursos de JavaScript'));
// console.log (cursoJS, cursosHTML);


