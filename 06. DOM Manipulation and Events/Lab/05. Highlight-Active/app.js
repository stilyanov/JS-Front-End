function focused() {
    const text = Array.from(document.querySelectorAll('input[type="text"]'));
    // const text = Array.from(document.getElementsByTagName('input'));

    for (const div of text) {
        div.addEventListener('focus', onFocus);
        div.addEventListener('blur', onBlur);
    }


    function onFocus(e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.add('focused');
    }

    function onBlur(e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.remove('focused');
    }
}