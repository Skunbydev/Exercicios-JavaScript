// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll ('p');

paragrafos.forEach (paragrafos => {
    console.log (paragrafos, paragrafos.textContent)
});

// Mostre o texto dos parágrafos no console
// Como corrigir os erros abaixo:
 const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) =>  console.log(item, index));

let i = 0;  imgs.forEach(() =>  console.log (i++));




