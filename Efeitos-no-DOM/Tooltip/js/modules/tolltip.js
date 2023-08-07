export default function initToolTip() {

}

const tolltips = document.querySelector('[data-tolltip]');

tolltips.forEach(item => {
    item.addEventListener('mouseover', function(event) {
        console.log ('oi');
    })
});