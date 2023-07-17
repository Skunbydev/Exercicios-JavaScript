// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [{
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

// let somaTaxa = 0;
// let somaRecebimento = 0;

// transacoes.forEach(transacao => {
//     const valorLimpo = +transacao.valor.replace('R$', '');

//     if (transacao.descricao.slice(0, 4) === 'Taxa')
//         somaTaxa += valorLimpo;

//     else if (transacao.descricao.slice(0, 11) === 'Recebimento')
//         somaRecebimento += valorLimpo;


// });
// const valoresFormatados = `Valor total de taxas é de: R$${somaTaxa.toFixed(2)}, valor total recebido é de: R$${somaRecebimento.toFixed(2)}`;
// console.log(valoresFormatados);


function initTransacao() {
    let somaTaxa = 0;
    let somaRecebimento = 0;

    transacoes.forEach(transacao => {
        const valorLimpo = Number(transacao.valor.replace('R$', '').trim());

        if (transacao.descricao.startsWith('Taxa'))
            somaTaxa += valorLimpo;
        else if (transacao.descricao.startsWith('Recebimento'))
            somaRecebimento += valorLimpo;
    });

    const valorFormatado = `as taxas são: R$${somaTaxa.toFixed(2)}, o valor recebido foi de: R$${somaRecebimento.toFixed(2, Infinity)}`;
    console.log(valorFormatado)
}

initTransacao()

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesLista = transportes.split(';');
console.log (transportesLista);


// Substitua todos os span's por a's
let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
html = html.split ('span').join('a');
console.log (html);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const fraseCortada = frase.slice(-1);
console.log (fraseCortada);
// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;

transacoes2.forEach (item => {
    item = item.toLocaleLowerCase().trim().slice(0, 4);
    
    if (item === 'taxa')
    taxasTotal++
}); console.log (taxasTotal)