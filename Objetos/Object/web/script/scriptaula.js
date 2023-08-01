const pessoa = ({
    nome: 'Luiz',
    idade: 20,
})

console.log (pessoa);

const carro = {
    marca: 'Marca',
    rodas: 4,
    acelerar() {
        return `${this.marca} acelerou`
    },
    buzinar () {
        return `${this.marca} buzinou`
    }
}

const honda = Object.create(carro);