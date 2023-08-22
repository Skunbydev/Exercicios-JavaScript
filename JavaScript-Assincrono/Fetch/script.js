const doc = fetch('./doc.txt');

doc.then(resolucao => resolucao.text()).then((body) => { 
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;

});

const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(r => r.json()).then(body => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body.logradouro;
});