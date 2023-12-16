const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const addMealButton = document.getElementById('add-meal');
const editMealButton = document.getElementById('edit-meal');
const loadMealsButton = document.getElementById('load-meals');
const listMeals = document.getElementById('list');
const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');

loadMealsButton.addEventListener('click', loadMeals);
addMealButton.addEventListener('click', addMeal);
editMealButton.addEventListener('click', editMeal);

let currentMealId = '';

async function editMeal(e) {
    e.preventDefault();

    const food = foodInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    if (!food || !time || !calories) {
        return;
    }

    const meal = {
        _id: currentMealId,
        food,
        time,
        calories,
    };

    await fetch(`${baseUrl}${currentMealId}`, {
        method: 'PUT',
        body: JSON.stringify(meal),
    });

    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';

    addMealButton.disabled = false;
    editMealButton.disabled = true;


    await loadMeals();
}

async function addMeal(e) {
    e.preventDefault();


    const food = foodInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    if (!food || !time || !calories) {
        return;
    }

    const meal = {
        food,
        time,
        calories,
    };

    await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(meal),
    });

    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';

    await loadMeals();
}

async function loadMeals(e) {

    const request = await fetch(baseUrl);
    const result = await request.json();

    const meals = Object.values(result);

    listMeals.innerHTML = '';

    for (const meal of meals) {
        const mealElement = renderMeals(meal);

        mealElement.setAttribute('data-meal-id', meal._id);

        listMeals.appendChild(mealElement);
    }
}

function renderMeals(meal) {

    const divMeal = document.createElement('div');
    divMeal.classList = 'meal';

    const h2 = document.createElement('h2');
    h2.textContent = meal.food;

    const h3Time = document.createElement('h3');
    h3Time.textContent = meal.time;

    const h3Calories = document.createElement('h3');
    h3Calories.textContent = meal.calories;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList = 'meal-buttons';

    const changeButton = document.createElement('button');
    changeButton.classList = 'change-meal';
    changeButton.textContent = 'Change';

    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete-meal';
    deleteButton.textContent = 'Delete';


    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    divMeal.appendChild(h2);
    divMeal.appendChild(h3Time);
    divMeal.appendChild(h3Calories);
    divMeal.appendChild(buttonsContainer);

    changeButton.addEventListener('click', () => {

        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;

        currentMealId = divMeal.getAttribute('data-meal-id');
        divMeal.remove();

        addMealButton.disabled = true;
        editMealButton.disabled = false;

    });

    deleteButton.addEventListener('click', async () => {

        await fetch(`${baseUrl}${meal._id}`, {
            method: 'DELETE',
        })

        await loadMeals();

    });


    return divMeal;
}