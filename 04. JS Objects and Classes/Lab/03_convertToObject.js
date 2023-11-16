function convertToObject(jsonStr) {
    let person = JSON.parse(jsonStr);

    for (const iterator of Object.entries(person)) {
        const [key, value] = iterator;

        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');