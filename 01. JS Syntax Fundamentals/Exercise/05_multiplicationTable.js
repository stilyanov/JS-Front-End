function multiplicationTable (number) {
    let total = 0;

    for(let i = 1; i <= 10; i++) {
        total = number * i;
        console.log(`${number} X ${i} = ${total}`)
    }
}

multiplicationTable(2)