/* class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log ('acelerou fundo');
    }
    quebrou() {
        console.log ('bateu no poste');
    }
}



class Moto extends Veiculo {
    constructor(rodas, km, torque) {
        super(rodas);
        this.km = km;
        this.torque = torque;
    }
    acelerar() {
        console.log (`A motoca empinou com  ${this.rodas} das rodas, e pecorreu à ${this.km} por hora com um torque de ${this.torque} `)
    }
    empinar() {
        console.log ('empinou com ' + this.rodas + ' roda');
    }
}

const honda = new Moto("uma", 300 + 'km', 90 + 's');
honda.empinar();
honda.acelerar();
const ford = new Veiculo(4);
*/ 

class Veiculo {
    constructor (rodas, combustivel) {
        this.rodas = rodas,
        this.combustivel = combustivel;
    }
}

class Moto extends Veiculo {
    constructor (rodas, combustivel, capacete) {
        super (rodas, combustivel),
        this.capacete = capacete;
    }
    verificarCapacete() {
        if (this.capacete === true) 
            console.log ("Pessoa está dentro da lei, parabéns");
        else 
            console.log ("Maloqueiro fora da lei");
    }
}





const xre390 = new Moto (2, 'Gasolina', false);
xre390.verificarCapacete();