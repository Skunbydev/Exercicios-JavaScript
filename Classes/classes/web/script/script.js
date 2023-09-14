// function Button (text, background) {
//     this.text = text;
//     this.background = background;
// }



// Button.prototype.element = function() {
//     const buttonElement  = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
// }


class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element () {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
    static BlueButton (text) {
        return new Button(text, 'blue', 'white');
    }
}

const botaoAzul = Button.BlueButton('Comprar');

// console.log (BlueButton.appendTo('body'));

// class Button {
//     constructor (options) {
//         this.options = options;
//     }
// }

// const optionsBlue = {
//     backgroundColor: 'blue',
//     text: 'comprar',
//     color: 'white',

// }

// const blueButton = new Button (optionsBlue);

// console.log (blueButton.options.backgroundColor);


// class Button {
//     constructor (text) {
//         this.text = text;
//     }
//     static createButton (background) {
//         const elementButton = document.createElement('button');
//         elementButton.style.backgroundColor = background;
//         elementButton.innerText = 'clique';
//         return elementButton;
//     }
// }
// const blueOptions = {
//     backgroundColor:  'blue',
//     text: 'Comprar',
//     color: 'white',

// }

// const blueButton = new Button (blueOptions);

// const blueButtonStatic = Button.createButton('Clique', 'blue');

// console.log (blueButtonStatic);

