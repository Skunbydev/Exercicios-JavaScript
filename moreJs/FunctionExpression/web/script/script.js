/*
function somar (a, b) {
    return a + b;
}


const somar = function (a, b) {
    return a + b;
}

const somar = (a, b) => a + b;
somar (4, 2);

const quadrado = (a) => a *= a;
console.log (quadrado(3));


const instrumento = 'Guitarra';


function initCodigo(){
 const instrumento = 'Violão';
 console.log(instrumento);
}

initCodigo();

(function(){
    const instrumento = "Violão";
    console.log(instrumento);
})();
 

(()=>{
    const instrumento = 'violão';
    console.log(instrumento);
})();
*/

function createButton (text) {
    const obj = {
        text: text,
    }
    return obj;
}

const btnBlue = createButton('Comprar');