// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
// const cursos = document.querySelectorAll('.curso');
// const cursosArray = Array.from(cursos);

// const objetoCursos = cursosArray.map(curso => {
// const dadosDoCurso = {
//   titulo:  curso.querySelector('H1').innerText,
//   descricao: curso.querySelector('P').innerText,
//   quantidadeAula: curso.querySelector ('.aulas').innerText,

// }

//  })

// console.log (cursosArray);

const curso = document.querySelectorAll('.curso');
const cursoArray = Array.from(curso);

const ObjetoCursos = cursoArray.map(curso => {
const titulo = curso.querySelector('H1').innerHTML;
const descricao = curso.querySelector('P').innerHTML;
const aulas = curso.querySelector('.aulas')
const horas = curso.querySelector ('.horas').innerHTML;

return {
  titulo, descricao, aulas, horas
}
});

console.log (ObjetoCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter(n => n > 100);
console.log (maiorQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some(item => {
  return item === 'Baixo';
});

console.log (possuiBaixo);
// Retorne o valor total das compras
const compras = [{
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
  const limpaPreco = Number(item.preco.replace('R$', '').replace(',', '.').trim());
  
  return acumulador + limpaPreco;
}, 0);

console.log (valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

// Me sinto muito feliz, sinto que estou progredindo. Mas ao mesmo tempo, me isnto retardado por errar coisas simples. 
// Na segunda, fiz uma entrevista de emprego, receberei a resposta na sexta-feira à noite, mas sei que não passei...

