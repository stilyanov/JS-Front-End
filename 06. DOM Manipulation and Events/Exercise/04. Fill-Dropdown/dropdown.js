function addItem() {
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const optionElement = document.createElement('option');

    if (itemText.value !== '' && itemValue.value !== '') {
        menu.appendChild(optionElement);
        optionElement.textContent = itemText.value;
        optionElement.value = itemValue.value;
    }


    itemText.value = ''
    itemValue.value = '';
}