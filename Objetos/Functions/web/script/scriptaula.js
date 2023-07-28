function descricaoCarro (velocidade) {
    console.log (this); 
    console.log (this.modelo, this.marca, this.ano + velocidade)
}

descricaoCarro.call ({modelo: 'Fusion', marca: 'Ford', ano: 2023}, ' 100km');

const carros = ['Volvo', 'Ford', 'Mitsubchian', 'Volkwagen'];
const frutas = ['Banana', 'Uva', 'Maça'];
console.log (carros);
carros.forEach.call(frutas, (item) => {
    console.log (item);
});
//Como chamar?, trocando o paramêtro, pro da fruta!!

// Exemplo real //
function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
    this.element.classList.add (classe)
}


const ul = new Dom('ul');
ul.ativo('ativar');

console.log(ul.element)