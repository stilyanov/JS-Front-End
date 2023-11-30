function deleteByEmail() {
    const inputElement = document.querySelector('input[name="email"]');
    const tableRows = Array.from(document.querySelector('tbody').children);
    const result = document.getElementById('result');

    let isRemoved = false;

    for (const row of tableRows) {
        const email = row.children[1];

        if (email.textContent === inputElement.value) {
            row.remove();

            isRemoved = true;
        }
    }

    if (isRemoved) {
        result.textContent = 'Deleted';
    } else {
        result.textContent = 'Not found.';
    }
}