const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
}

const {marca, ano} = carro;

console.log(marca, ano);
/* primeira forma */ 

const cliente = {
    nome: "Luiz Felipe",
    sobrenome: "Santos de lima Alves",
    compras: {
        fisicas: {
            cadernos: [{nome:'Pokedex', preco: 20}, {nome: 'LilPeep', preco: 30}, ]
        },
        digitais: {
            livros: [{nome: 'Como deixar de ser broxa', preco: 15},{nome: 'Pedi demissão, oque faço agora?', preco: 5}],
            videos: [{nome: 'Como gozar fedido', preco: 5}, {nome: 'Como parar de ser esquisito?', preco: 5}, 
            {nome:'Sou depressivo.', preco: 9}]
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

console.log(itensCompras.itensTotais);

function valorCompra(itensCompras) {
    let valorFisicaCadernos = 0;
    let valorDigitalLivros = 0;
    let valorDigitalVideos = 0;

    if (itensCompras.fisicas && itensCompras.fisicas.cadernos) {
        valorFisicaCadernos = itensCompras.fisicas.cadernos.reduce((soma, item) => soma + item.preco, 0);
    }
    if (itensCompras.livros) {
        valorDigitalLivros = itensCompras.livros.reduce((soma, item) => soma + item.preco, 0);
    }
    if (itensCompras.videos) {
        valorDigitalVideos = itensCompras.videos.reduce((soma, item) => soma + item.preco, 0);
    }
    console.log("Total cost of physical cadernos: " + valorFisicaCadernos);
    console.log("Total cost of digital livros: " + valorDigitalLivros);
    console.log("Total cost of digital videos: " + valorDigitalVideos);

    const grandTotal = valorFisicaCadernos + valorDigitalLivros + valorDigitalVideos;
    console.log("Grand Total: " + grandTotal);
}





function formatacao(dadosCadastrais, itensCompras) {
    const nomeCompleto = `${dadosCadastrais.primeiroNome} ${dadosCadastrais.sobrenome}`; 
    const comprasCompletas = `${itensCompras.cadernos}`
    return `O cliente ${nomeCompleto} comprou ${comprasCompletas}`;
}

console.log(formatacao(dadosCadastrais));


console.log(dadosCadastrais.email);
const {nome} = cliente.nome;




