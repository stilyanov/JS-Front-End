function phoneBook(array) {
    let phoneBook = {};

    for (const element of array) {
        const [name, phone] = element.split(" ");
        phoneBook[name] = phone;
    }

    for (const person of Object.entries(phoneBook)) {
        const [name, phone] = person;
        console.log(`${name} -> ${phone}`);
    }
}

phoneBook (['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);