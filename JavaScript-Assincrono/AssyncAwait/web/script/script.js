async function puxarDados() {
    try {
        const responseDados = await fetch ('./script/dados.json');
        const jsonDados = await responseDados.json();
        document.body.innerText = jsonDados.aula;
        console.log ("passou aqui");
    }
    catch (erro) {
        console.log (erro);
    }
}
puxarDados();