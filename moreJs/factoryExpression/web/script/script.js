/* function createButton (text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }

    return {
        text,
        element,
    }
}

const buttonBlue = createButton('Botão azul');
console.log (buttonBlue); 
*/ 

function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`

function andar() {
    return `${nomeCompleto} andou`;
}

function nadar() {
    return `${nomeCompleto} nadou`;
}

return {
    nome,
    sobrenome, 
    andar,
    nadar
}

}

const luiz = criarPessoa("Luiz Felipe", "Santos");

console.log(luiz.nadar());