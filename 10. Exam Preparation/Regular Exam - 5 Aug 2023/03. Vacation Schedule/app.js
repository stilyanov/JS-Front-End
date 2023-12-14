const baseUrl = "http://localhost:3030/jsonstore/tasks/";

const listVacations = document.getElementById('list');

const nameInput = document.getElementById('name');
const numberOfDaysInput = document.getElementById('num-days');
const dateInput = document.getElementById('from-date');
const loadVacationsButton = document.getElementById('load-vacations');
const addVacationButton = document.getElementById('add-vacation');
const editVacationButton = document.getElementById('edit-vacation');

loadVacationsButton.addEventListener('click', loadVacations);
addVacationButton.addEventListener('click', addVacation);
editVacationButton.addEventListener('click', editVacation);

let currentVacationId = '';

async function editVacation(e) {
    e.preventDefault();

    const name = nameInput.value;
    const days = numberOfDaysInput.value;
    const date = dateInput.value;

    if (!name || !days || !date) {
        return;
    }

    const vacation = {
        _id: currentVacationId,
        name,
        days,
        date,
    };

    await fetch(`${baseUrl}${currentVacationId}`, {
        method: 'PUT',
        body: JSON.stringify(vacation),
    });

    nameInput.value = '';
    numberOfDaysInput.value = '';
    dateInput.value = '';

    addVacationButton.disabled = false;
    editVacationButton.disabled = true;

    await loadVacations();
}

async function addVacation(e) {
    e.preventDefault();

    const name = nameInput.value;
    const days = numberOfDaysInput.value;
    const date = dateInput.value;

    if (!name || !days || !date) {
        return;
    }

    const vacation = {
        name,
        days,
        date,
    };

    await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(vacation),
    });

    nameInput.value = '';
    numberOfDaysInput.value = '';
    dateInput.value = '';

    await loadVacations();

}

async function loadVacations(e) {

    const request = await fetch(baseUrl);
    const result = await request.json();

    const vacations = Object.values(result);

    listVacations.innerHTML = '';

    for (const vacation of vacations) {
        const vacationElement = renderVacation(vacation);

        vacationElement.setAttribute('vacation-id', vacation._id);

        listVacations.appendChild(vacationElement);
    }

}

function renderVacation(vacation) {

    const h2 = document.createElement('h2');
    h2.textContent = vacation.name;

    const h3date = document.createElement('h3');
    h3date.textContent = vacation.date;

    const h3days = document.createElement('h3');
    h3days.textContent = vacation.days;

    const changeButton = document.createElement('button');
    changeButton.classList = 'change-btn';
    changeButton.textContent = "Change";

    const doneButton = document.createElement('button');
    doneButton.classList = 'done-btn';
    doneButton.textContent = 'Done';

    const divContainer = document.createElement('div');
    divContainer.classList = 'container';


    divContainer.appendChild(h2);
    divContainer.appendChild(h3date);
    divContainer.appendChild(h3days);
    divContainer.appendChild(changeButton);
    divContainer.appendChild(doneButton);

    changeButton.addEventListener('click', () => {

        nameInput.value = vacation.name;
        numberOfDaysInput.value = vacation.days;
        dateInput.value = vacation.date;

        currentVacationId = divContainer.getAttribute('vacation-id');
        divContainer.remove();

        addVacationButton.disabled = true;
        editVacationButton.disabled = false;

    });

    doneButton.addEventListener('click', async (e) => {

        await fetch(`${baseUrl}${vacation._id}`, {
            method: 'DELETE',
        });

        await loadVacations();

    });

    return divContainer;
}