const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) => {
    console.log (item.toUpperCase(), index, array)
    return item;
    
});

console.log (novaArray[1])


const numeros = [2, 4, 6, 8, 10, 120];

const numerosMultiplicados = numeros.map (n => n*2);

console.log (numerosMultiplicados);

const aulas = [10, 25, 30];

 const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
    console.log (acumulador + item);
    return acumulador + item;
}, 20)

console.log (reduceAulas);

