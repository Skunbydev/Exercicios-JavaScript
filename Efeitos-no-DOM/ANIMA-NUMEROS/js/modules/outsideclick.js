export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            setTimeout(() =>html.addEventListener(userEvent, handleoutsideClick));
        })

        element.setAttribute(outside, '');
    }

    function handleoutsideClick(event) {
        if (!element.contains(event.target)) {
            events.forEach(userEvent => {
                html.addEventListener(userEvent, handleoutsideClick);
            });
            callback();
        }

    }
}