const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();

comidas.unshift('Peixe', 'Batata');
comidas.push ('Arroz');
console.log (comidas);
console.log (primeiroValor);
console.log (ultimoValor);


// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
function initEstudante() {
  const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

  estudantes.reverse(); // Reverse the array first
  estudantes.sort();    // Sort the array (now in reverse)

  function Estudante(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  const Joana = new Estudante('Joana', 20);
  const Juliana = new Estudante('Juliana', 21);

  estudantes.forEach(estudante => {
    if (estudante.includes('Joana')) 
      console.log(`${Joana.nome} é uma pessoa real`);
    else (
      console.log ('tste')
    )
  });

  console.log(estudantes);
}

initEstudante();





let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,4
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
