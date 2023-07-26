 const carros = ['Ford', 'Fiat', 'Honda'];
 const novaArray = carros.map((item, index, array) => {
     console.log(item.toUpperCase(), index, array) 
     return item;
 });
 console.log(novaArray[1])

 const numeros = [2, 4, 6, 8, 10, 120];
 const numerosMultiplicados = numeros.map(n => n * 2);
 console.log(numerosMultiplicados);
 const aulas = [10, 25, 30];
 const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
     console.log(acumulador + item);
     return acumulador + item;
 }, 20)
 console.log(reduceAulas);

 const numero2 = [20, 30, 90, 88, 125, 107];
 const numeroMaior = numero2.reduce((anterior, atual) => {
     if (anterior > atual)
         return anterior;

     else
         return atual;
 });
 console.log(numeroMaior);

 const frutas = ['Banana', 'Perâ', 'Uva'];
 const verificaFruta = frutas.some(fruta => {
     return fruta === 'Uva';
 });
 console.log(verificaFruta);

 function maiorQue100(numero) {
     return numero > 10;
 }

 const numeros3 = [0, 43, 22, 35, 101, 2];
 const temMaior = numeros3.some(maiorQue100);


 console.log(temMaior);