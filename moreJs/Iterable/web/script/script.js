const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for (const fruta of frutas) {
    console.log (fruta);
}


const carro = {
    marca: 'Fiat',
    ano: 2023,
}

for (const key in carro) {
    console.log(carro[key])
}

for (const f in frutas) {
    console.log (frutas[f]);
}

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style of btnStyles) {
    console.log (btnStyles[style]);
}