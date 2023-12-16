window.addEventListener("load", solve);

function solve() {

    const expenseTypeInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');
    const addButton = document.getElementById('add-btn');
    const deleteButton = document.querySelector('.delete');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        const expenseType = expenseTypeInput.value;
        const amount = amountInput.value;
        const date = dateInput.value;

        if (!expenseType || !amount || !date) {
            return;
        }

        const li = document.createElement('li');
        li.classList = 'expense-item';

        const article = document.createElement('article');

        const pType = document.createElement('p');
        pType.textContent = `Type: ${expenseType}`;

        const pAmount = document.createElement('p');
        pAmount.textContent = `Amount: ${amount}$`

        const pDate = document.createElement('p');
        pDate.textContent = `Date: ${date}`;

        const buttons = document.createElement('div');
        buttons.classList = 'buttons';

        const editButton = document.createElement('button');
        editButton.classList.add('btn');
		editButton.classList.add('edit');
		editButton.textContent = 'edit';

        const okButton = document.createElement('button');
        okButton.classList.add('btn');
		okButton.classList.add('ok');
		okButton.textContent = 'ok';

        article.appendChild(pType);
        article.appendChild(pAmount);
        article.appendChild(pDate);

        buttons.appendChild(editButton);
        buttons.appendChild(okButton);

        li.appendChild(article);
        li.appendChild(buttons);

        previewList.appendChild(li);

        expenseTypeInput.value = '';
        amountInput.value = '';
        dateInput.value = '';

        addButton.disabled = true;

        editButton.addEventListener('click', () => {

            expenseTypeInput.value = expenseType;
            amountInput.value = amount;
            dateInput.value = date;

            previewList.removeChild(li);

            addButton.disabled = false;
        });

        okButton.addEventListener('click', () => {

            buttons.remove();

            expensesList.appendChild(li);

            // previewList.innerHTML = '';

            addButton.disabled = false;

        });

        deleteButton.addEventListener('click', () => {
            location.reload();
        });

    });

}