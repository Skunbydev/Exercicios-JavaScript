function tete() {
    console.log (this)
    console.log (this.genero, this.idade, this.chata)
}

tete.call({genero: 'feminino', idade: 19, chata: 'SIM' });


const frutas = ['Maça', 'Banana', 'Melão'];

Array.prototype.pop(frutas);

const pegarLi = document.querySelectorAll('li');
const fromArray = Array.from(pegarLi);

 const filtro = Array.from(pegarLi, (item)=> {
    console.log (item.classList);
    return true;
 });

console.log (pegarLi);
console.log (fromArray);


const numeros = [23021, 210321, 321890, 38210, 21890];

const $ = document.querySelectorAll.bind(document);

const carro = {
    marca: 'Ford',
    ano: 2023,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao}km em ${tempo}s`
    }
}

console.log (carro.acelerar(100, 5));

const honda = {
    marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda, 100, 30); //funciona do mesmo jeito que o console.log (carro.acelerar(100, 5)); :)
console.log (acelerarHonda())


function imc (altura, peso) {
    return peso / (altura*altura); 
}

const imc172 = imc.bind(null, 1.72);


imc (1.80, 70);
imc172 (66);
console.log (imc172(66).toFixed())
console.log (imc(1.80, 70).toFixed()) // toFixed() serve para por o número fixo, caso contrário, irá aparecer números quebrados.

