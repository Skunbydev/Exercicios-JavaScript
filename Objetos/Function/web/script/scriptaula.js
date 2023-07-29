function tete() {
    console.log (this)
    console.log (this.genero, this.idade, this.chata)
}

tete.call({genero: 'feminino', idade: 19, chata: 'SIM' });