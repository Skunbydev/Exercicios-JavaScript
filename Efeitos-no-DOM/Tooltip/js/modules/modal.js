export default function initModal() {

    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const modalContainer = document.querySelector('[data-modal="container"]');

    if (botaoAbrir && botaoFechar && modalContainer) {

        function toggleModal(event) {
            event.preventDefault();
            modalContainer.classList.toggle('ativo');
        }

        function cliqueForaModal(event) {
            if (event.target === this)
                toggleModal(event);
        }
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        modalContainer.addEventListener('click', cliqueForaModal);


    }
};

// metódo alternativo: 
// document.addEventListener('DOMContentLoaded', function () {

//     const abrirModal = document.querySelectorAll('a[data-modal="abrir"]');
//     const fecharModal = document.querySelectorAll('[data-modal="fechar"]');
//     const containerModal = document.querySelector('[data-modal="container"]');

//     abrirModal.forEach(links => {
//         links.addEventListener('click', function (e) {
//             e.preventDefault();
//             containerModal.classList.add('ativo');
//         })
//     });

//     fecharModal.forEach(links => {
//         links.addEventListener('click', function (e) {
//             containerModal.classList.remove('ativo');
//         })
//     })
// })