function getInfo(array) {
    let person = {};

    for (const element of array) {
        const [name, address] = element.split(":");
        person[name] = address;
    }

    const peopleNames = Object.entries(person);
    const sortedPeople = peopleNames.sort();

    for (const element of sortedPeople) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

getInfo(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);