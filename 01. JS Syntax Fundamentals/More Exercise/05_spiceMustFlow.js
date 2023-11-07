function amountOfSpice(startingYield) {
    let days = 0;
    let totalSpice = 0;

    while (startingYield >= 100) {
        days++;
        totalSpice += startingYield;
        startingYield -= 10;
        totalSpice -= 26;

        if (totalSpice < 0) {
            totalSpice = 0;
        }
    }

    totalSpice -= 26;
    if (totalSpice < 0) {
        totalSpice = 0;
    }

    console.log(days);
    console.log(totalSpice);
}

amountOfSpice(450);