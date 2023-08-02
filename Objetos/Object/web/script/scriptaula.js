const pessoa = ({
    nome: 'Luiz',
    idade: 20,
})

console.log (pessoa);

const carros = {
    marca: 'Honda',
    ano: 2023, 
    init (valor) {
    this.marca = valor; //definirá o valor, como marca. Fazendo o JS imprimir string.
    return this;
    },
    buzinar() {
    return `O carro da ${this.marca}, buzinou.`        
    },
    acelerou(velocidade) {
     return `O carra da ${this.marca}, acelerou à ${velocidade}.`;   
    }
}

const honda = Object.create(carros).init('Honda');
const ferrari = Object.create(carros).init('Ferrari');

console.log (ferrari.acelerou('150km'));
// honda.marca = 'Honda';
// honda.acelerou();

const funcaoAutomovel = {
    acelerar () {
        return 'acelerou';
    },
    buzinar () {
        return 'buzinou';
    }
}

const moto = {
    rodas: 2,
    capacete: true, 
}
const carro = {
    rodas: 4,
    mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);
