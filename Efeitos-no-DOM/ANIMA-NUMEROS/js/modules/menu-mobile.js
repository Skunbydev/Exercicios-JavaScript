import outsideClick from "./outsideclick.js";

export default function initMobilemenu() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

    function openMenu(event) {
        menuButton.classList.add('active');
        menuList.classList.add('active');
        outsideClick(menuList, eventos, () => {
            menuButton.classList.remove('active');
            menuList.classList.remove('active');
        });
    }
    eventos.forEach(eventos => menuButton.addEventListener(eventos, openMenu));
}

