function perfectNumber(number) {
    let sum = 0;

    for (let currentNum = 1; currentNum < number; currentNum++) {
        if (number % currentNum == 0) {
            sum += currentNum;
        }
    }

    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(1236498);