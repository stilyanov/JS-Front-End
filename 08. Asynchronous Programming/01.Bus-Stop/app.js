function getInfo() {
    const inputBusId = document.getElementById('stopId').value;
    const submitBtn = document.getElementById('submit');

    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';

    fetch(baseUrl + `${inputBusId}`)
        .then((result) => {
            return result.json()
        })
        .then((response) => {
            stopName.textContent = response.name;

            for (const bus of Object.entries(response.buses)) {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                buses.appendChild(li);
            }
        })
        .catch((err) => {
            stopName.textContent = 'Error';
        })
}