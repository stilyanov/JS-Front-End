const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadHistoryButton = document.getElementById('load-history');
const addWeatherButton = document.getElementById('add-weather');
const editWeatherButton = document.getElementById('edit-weather');
const listHistories = document.getElementById('list');
const locationInput = document.getElementById('location');
const temperatureInput = document.getElementById('temperature');
const dateInput = document.getElementById('date');

loadHistoryButton.addEventListener('click', loadHistories);
addWeatherButton.addEventListener('click', addWeather);
editWeatherButton.addEventListener('click', editWeather);

let currentHistoryId = '';

async function editWeather(e) {
    e.preventDefault();

    const location = locationInput.value;
    const temperature = temperatureInput.value;
    const date = dateInput.value;

    if (!location || !temperature || !date) {
        return;
    }

    const history = {
        _id: currentHistoryId,
        location,
        temperature,
        date,
    };

    await fetch(`${baseUrl}${currentHistoryId}`, {
        method: 'PUT',
        body: JSON.stringify(history),
    })

    locationInput.value = '';
    temperatureInput.value = '';
    dateInput.value = '';

    addWeatherButton.disabled = false;
    editWeatherButton.disabled = true;

    await loadHistories();
}

async function addWeather(e) {
    e.preventDefault();

    const location = locationInput.value;
    const temperature = temperatureInput.value;
    const date = dateInput.value;

    if (!location || !temperature || !date) {
        return;
    }

    const history = {
        location,
        temperature,
        date,
    };

    await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(history),
    });

    locationInput.value = '';
    temperatureInput.value = '';
    dateInput.value = '';

    await loadHistories();
}

async function loadHistories(e) {

    const request = await fetch(baseUrl);
    const result = await request.json();

    const histories = Object.values(result);

    listHistories.innerHTML = '';

    for (const history of histories) {
        const historyElement = renderHistories(history);

        console.log(history);

        historyElement.setAttribute('data-history-id', history._id);

        listHistories.appendChild(historyElement);
    }

}

function renderHistories(history) {

    const divContainer = document.createElement('div');
    divContainer.classList = 'container';

    const h2 = document.createElement('h2');
    h2.textContent = history.location;

    const h3Date = document.createElement('h3');
    h3Date.textContent = history.date;

    const h3Degrees = document.createElement('h3');
    h3Degrees.classList = 'celsius';
    h3Degrees.textContent = history.temperature;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList = 'buttons-container';

    const changeButton = document.createElement('button');
    changeButton.classList = 'change-btn';
    changeButton.textContent = 'Change';

    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete-btn';
    deleteButton.textContent = 'Delete';


    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    divContainer.appendChild(h2);
    divContainer.appendChild(h3Date);
    divContainer.appendChild(h3Degrees);
    divContainer.appendChild(buttonsContainer);


    changeButton.addEventListener('click', () => {

        locationInput.value = history.location;
        temperatureInput.value = history.temperature;
        dateInput.value = history.date;

        currentHistoryId = divContainer.getAttribute('data-history-id');
        divContainer.remove();

        addWeatherButton.disabled = true;
        editWeatherButton.disabled = false;

    });

    deleteButton.addEventListener('click', async () => {

        await fetch(`${baseUrl}${history._id}`, {
            method: 'DELETE',
        })

        await loadHistories();

    });

    return divContainer;
}