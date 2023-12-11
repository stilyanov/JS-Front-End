function solve() {
    const info = document.querySelector('.info');
    const [departBtn, arriveBtn] = document.querySelectorAll('input');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';

    let [nextId, location] = ['depot', null];

    async function depart() {
        const response = await fetch(`${baseUrl}${nextId}`)
        const result = await response.json();

        location = result.name;
        nextId = result.next;
        info.textContent = `Next stop ${location}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    async function arrive() {
        info.textContent = `Arriving at ${location}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();