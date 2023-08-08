export default function initDropdownMenu() {
 
    const dropdownMenu = document.querySelectorAll('[data-dropdown]')

    dropdownMenu.forEach(menu => {
    ['click', 'touchstart'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    })
    })

    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active');

    }
}
//menu.addEventListener('click', handleClick);
//menu.addEventListener('touchstart', handleClick);