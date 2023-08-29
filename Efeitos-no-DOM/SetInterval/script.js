// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarCor () {
//     document.body.classList.toggle('active');
// }
// setInterval (mudarCor, 2000);


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);




let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval (()=>{
        tempo.innerText = i++;
    iniciar.setAttribute('disabled', '')
    }, 200);
}

function pausarTempo() {
    clearInterval(timer)
    iniciar.removeAttribute('disabled', '')
}

function resetarTempo () {
    clearInterval(timer);
    i = 0;
    tempo.innerText = i;
}