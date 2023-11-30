function addItem() {
    const newListItem = document.getElementById('newItemText').value;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newListItem));
    document.getElementById('items').appendChild(li);

    document.getElementById('newItemText').value = '';
}
