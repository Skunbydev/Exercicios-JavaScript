/* function perimetroForma(lado, totalLados = 4) {
    const argArray = Array.from(arguments);
    argArray.forEach(arg =>{
        console.log(arg)
    }) 
    console.log(argArray);
    return lado * totalLados;
}

perimetroForma(20, 30000);
console.log(perimetroForma);


function anunciarGanhadores(...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(`${ganhador} ganhou.`)
    })
}

anunciarGanhadores("Luiz", "Luiz2", "Luiz1")


*/ 

function perimetroForma(lado, totalLados, ...listaArgumentos) {
    console.log (listaArgumentos);
    return lado * totalLados;
}


perimetroForma(20, 2, 'Testando', 'loloWorld');

const frutas = ["Maça", "Banana", "Mamão"];
const legumes = ["Batata", "Pepino", "Rabanete"];

const comidas = [...frutas, ...legumes];

console.log (comidas);


function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador =>{
        console.log(`${ganhador} ganhou um ${premio}`)
    })
}

const ganhadores = ["Luiz", "Carlos SadBoy", "Teté"];

anunciarGanhadores("carro", ...ganhadores);
