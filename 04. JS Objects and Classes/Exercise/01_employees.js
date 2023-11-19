function employees(list) {
    list.forEach((employee) => {
        let name = employee;
        let personalNum = employee.length;
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);