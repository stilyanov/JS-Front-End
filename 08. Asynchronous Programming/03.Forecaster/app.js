function attachEvents() {
    const [location, getWeatherBtn] = document.getElementsByTagName('input');
    const forecast = document.getElementById('forecast');
    const currentConditions = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');

    const weatherIcons = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',
    }

    getWeatherBtn.addEventListener('click', async () => {

        try {

            const request = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            const result = await request.json();
            const objects = Object.values(result);

            for (let index = 0; index < objects.length; index++) {
                const currentCity = objects[index];

                const currentCode = currentCity.code;

                if (location.value === currentCity.name) {

                    const request2 = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentCode}`);
                    const result2 = await request2.json();
                    const conditionsObj = Object.values(result2);

                    currentDay(conditionsObj);

                    const request3 = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentCode}`);
                    const result3 = await request3.json();
                    const threeDay = Object.values(result3);

                    threeDayforecast(threeDay);

                    forecast.style.display = '';
                }
            }
        } catch (error) {
            forecast.style.display = 'none';
        }


    });


    function threeDayforecast(threeDay) {
        upcoming.innerHTML = `

                <div class="label">Three-day forecast</div>
                <div class="forecast-info">
                <span class="upcoming">
                <span class="symbol">${weatherIcons[threeDay[0][0].condition]}</span>
                <span class="forecast-data">${threeDay[0][0].low}°/${threeDay[0][0].high}°</span>
                <span class="forecast-data">${threeDay[0][0].condition}</span>
                </span>
                
                <span class="upcoming">
                <span class="symbol">${weatherIcons[threeDay[0][1].condition]}</span>
                <span class="forecast-data">${threeDay[0][1].low}°/${threeDay[0][1].high}°</span>
                <span class="forecast-data">${threeDay[0][1].condition}</span>
                </span>
                
                <span class="upcoming">
                <span class="symbol">${weatherIcons[threeDay[0][2].condition]}</span>
                <span class="forecast-data">${threeDay[0][2].low}°/${threeDay[0][2].high}°</span>
                <span class="forecast-data">${threeDay[0][2].condition}</span>
                </span>
            </div>
            
            `;
    }

    function currentDay(conditionsObj) {

        currentConditions.innerHTML = `
                        <div class="label">Current conditions</div>
                        <div class="forecasts">
                            <span class="condition symbol">${weatherIcons[conditionsObj[0].condition]}</span> 
                            <span class="condition">
                                <span class="forecast-data">${conditionsObj[1]}</span>
                                <span class="forecast-data">${conditionsObj[0].low}°/${conditionsObj[0].high}°</span>
                                <span class="forecast-data">${conditionsObj[0].condition}</span>
                            </span>
                        </div>
                    `;

    }


}

attachEvents();