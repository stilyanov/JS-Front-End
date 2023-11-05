function listOfNames(array) {
    array.sort((a,b) => a.localeCompare(b));
    let index = 1;

    for (let person of array) {
        console.log(`${index++}.${person}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);