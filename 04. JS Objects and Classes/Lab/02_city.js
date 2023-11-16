function printObject (object) {
    for (const person of Object.entries(object)) {
        const [key, value] = person;
        console.log(`${key} -> ${value}`);
    }
}

printObject ({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});