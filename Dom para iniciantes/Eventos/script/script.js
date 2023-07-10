// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkExternos = document.querySelector('a[href^="https"]');
console.log(linkExternos);

function handleNoLink(event) {
    event.preventDefault();
}

function handleAtivaClass(event) {
    if (linkExternos.className === 'ativo') {
        linkExternos.classList.remove('ativo');
    } else {
        linkExternos.classList.add('ativo');
    }
}
linkExternos.addEventListener('click', handleAtivaClass);
linkExternos.addEventListener('click', handleNoLink);
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelector('body');
const mostrarBody = (e => {
    console.log(e.target);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const removerBody = (e => `${e.target.remove()} ${console.log ('removido')}`);
body.addEventListener('click', mostrarBody);
body.addEventListener('click', removerBody);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const handleKeyboard = (e => {
    if (e.key === 't') document.body.classList.toggle('text-big');
});

window.addEventListener('keydown', handleKeyboard);
alert ('mamae, programar é muito dificil');