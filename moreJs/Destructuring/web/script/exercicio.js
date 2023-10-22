// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);


console.log (btnStyles.backgroundColor);
console.log (btnStyles.color);
console.log (btnStyles.margin); 
// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];



// Corrija o erro abaixo
const cachorro = {
  nome: 'Mel',
  raca: 'Vira-lata',
  cor: 'Amarela'
}

const {nome: MelNome, raca: MelRaca, cor: MelCor} = cachorro;

console.log (MelNome, MelCor, MelRaca);