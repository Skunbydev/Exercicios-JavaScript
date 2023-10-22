const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
}

const {
    marca,
    ano
} = carro;


/* primeira forma */

const cliente = {
    nome: "Luiz Felipe",
    sobrenome: "Santos de lima Alves",
    compras: {
        fisicas: {
            cadernos: [{
                nome: 'Pokedex',
                preco: 20
            }, {
                nome: 'LilPeep',
                preco: 30
            }, ]
        },
        digitais: {
            livros: [{
                nome: 'Como deixar de ser broxa',
                preco: 15
            }, {
                nome: 'Pedi demissão, oque faço agora?',
                preco: 5
            }],
            videos: [{
                    nome: 'Como gozar fedido',
                    preco: 5
                }, {
                    nome: 'Como parar de ser esquisito?',
                    preco: 5
                },
                {
                    nome: 'Sou depressivo.',
                    preco: 9
                }
            ]
        },
    },
    email: 'luizf.03072003@gmail.com'


}


const dadosCadastrais = {
    primeiroNome: cliente.nome,
    sobrenome: cliente.sobrenome,
    email: cliente.email,
}

const itensCompras = {
    fisicas: cliente.compras.fisicas,
    digitais: cliente.compras.digitais,
    cadernos: cliente.compras.fisicas.cadernos,
    livros: cliente.compras.digitais.livros,
    videos: cliente.compras.digitais.videos,
    itensTotais: {
        comprasFisicas: cliente.compras.fisicas,
        comprasDigitais: cliente.compras.digitais,
    }
}





const comprasCompletas = {
    fisicas: itensCompras.fisicas,
    digitais: itensCompras.digitais,
    itensComprados: {
        cadernos: itensCompras.cadernos,
        livros: itensCompras.livros,
        videos: itensCompras.videos
    }
}

const valorCompra = {
    compraDigitalLivro: cliente.compras.digitais.livros.reduce((total, valor) => total + valor.preco, 0),
    compraDigitalVideo: cliente.compras.digitais.videos.reduce((total, valor) => total + valor.preco, 0),
    compraFisicaCaderno: cliente.compras.fisicas.cadernos.reduce((total, valor) => total + valor.preco, 0),
    get valorTotal() {
        return this.compraDigitalLivro +
            this.compraDigitalVideo +
            this.compraFisicaCaderno;
    }
}

console.log(valorCompra.valorTotal)




function dadosFormatados(dadosCadastrais, comprasCompletas, valorCompra) {
    const nomeCompleto = `${dadosCadastrais.primeiroNome} ${dadosCadastrais.sobrenome}`;
    const itensComprados = comprasCompletas.itensComprados;
    const valorTotal = `R$:${valorCompra.valorTotal}`;
    return {nomeCompleto, itensComprados, valorTotal};
}

console.log (dadosFormatados(dadosCadastrais, comprasCompletas, valorCompra));


function handleKeyboard({key}) {
    console.log (key);
}

document.addEventListener('keyup', handleKeyboard);