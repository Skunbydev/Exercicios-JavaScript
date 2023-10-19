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
            cadernos: ['Pokedex']
        },
        digitais: {
            livros: ['Como deixar de ser broxa', 'Pedi demissão, oque faço agora?'],
            videos: ['Como gozar fedido', 'Como parar de ser esquisito?', 'Sou depressivo.']
        },
    },
    email: 'luizf.03072003@gmail.com'


}


const dadosCadastrais = {
    primeiroNome: cliente.nome,
    sobrenome: cliente.sobrenome,
    email: cliente.email,
}

const {fisicas, digitais, digitais: {livros, videos}, fisicas: {cadernos}} = cliente.compras;

const itensCompras = {
    cadernos, livros, videos
};

function formatacao(dadosCadastrais, itensCompras) {
    dadosCadastrais = `O cliente: ${primeiroNome}${sobrenome}`;
    return dadosCadastrais;
}

console.log(formatacao(dadosCadastrais));


console.log(dadosCadastrais.email);
const {nome} = cliente.nome;




