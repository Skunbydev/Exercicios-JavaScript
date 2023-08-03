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
const motoca = {
    capacete: true,
};

Object.defineProperties(motoca, {
    rodas: {
        value: 2,
        configurable: false, 
        writable: true,
    }
});
motoca.rodas = 4;
delete motoca.capacete, motoca.rodas; //Se o configurable: false, ele nao exclue o "rodas";


Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);
console.log (motoca);

const helicoptero = {
    helice: 2,
}

Object.defineProperties(helicoptero, {
    helice: {
        get() {
        return this._helice;
        },
        set(valor) {
        this._helice = valor * 4 + ` É o total de hélices`;
        }
    }
})
helicoptero.helice = 4;
console.log (helicoptero);