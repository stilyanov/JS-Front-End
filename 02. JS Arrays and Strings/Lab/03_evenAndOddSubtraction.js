function evenOddSubtraction(array) {

    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        const element = Number(array[i]);

        if (element % 2 == 0) {
            evenNumbers += element;
        } else {
            oddNumbers += element;
        }
    }

    console.log(evenNumbers - oddNumbers);
}

evenOddSubtraction([2,4,6,8,10]);