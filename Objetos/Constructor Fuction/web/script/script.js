// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nomePessoa, idadePessoa) {
    this.nome = nomePessoa;
        this.idade = idadePessoa;
    this.andar = function() {
        console.log(nomePessoa + ' andou');
    }
}



// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function Pessoas(nomeDaPessoa, idadeDaPessoa) {
    this.nome = nomeDaPessoa;
    this.idade = idadeDaPessoa;

    this.dadosDaPessoa = function () {
        return `${nomeDaPessoa} têm ${idadeDaPessoa} anos`;
    };
}


const joao = new Pessoas ('Joao', 19);
console.log (joao.dadosDaPessoa());

const maria = new Pessoas ('Maria', 25);
console.log (maria.dadosDaPessoa());

const bruno = new Pessoas ('Bruno', 15);
console.log (bruno.dadosDaPessoa());



// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach (element => {
            element.classList.add(classe);
        });
    this.removeClass = function (classe) {
        elementList.forEach (element => {
            element.classList.remove(classe)
        });
    }   
    }
}




const listaItens = new Dom('li');
listaItens.addClass('ativar');