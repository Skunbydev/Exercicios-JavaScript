const button = {
    get element() {
        return this._numero;
    },
    set element(numero) {
        this._numero = document.createElement(numero);
    }
}
button.tamanho = 400;
button.element = 'button';
button.element;