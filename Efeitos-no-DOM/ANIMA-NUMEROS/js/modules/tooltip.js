export default function initTooltips() {


    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach(item => {
        item.addEventListener('mouseover', onMouseOver);
    })

    function onMouseOver(event) {
        const tolltipBox = criarToolTipBox(this);

        onMouseMove.tolltipBox = tolltipBox;
        this.addEventListener('mousemove', onMouseMove)
        onMouseLeave.tolltipBox = tolltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave)

    }

    const onMouseLeave = {
        tolltipBox: '',
        element: '',
        handleEvent() {
            this.tolltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }

    }

    const onMouseMove = {
        handleEvent(event) {
            this.tolltipBox.style.top = event.pageY + 20 + 'px';
            this.tolltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function criarToolTipBox(element) {
        const toolTipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        toolTipBox.classList.add('tooltip')
        toolTipBox.innerText = text;
        document.body.appendChild(toolTipBox)
        return toolTipBox;

    }
}