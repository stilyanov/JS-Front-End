function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;
    let totalPrice = 0;

    if (typeOfGroup === "Students") {
        if (dayOfWeek === "Friday") {
            price = 8.45;
        } else if (dayOfWeek === "Saturday") {
            price = 9.80;
        } else if (dayOfWeek === "Sunday") {
            price = 10.46;
        }

        totalPrice = price * groupOfPeople;

        if (groupOfPeople >= 30) {
            totalPrice *= 0.85;
        }

    } else if (typeOfGroup === "Business") {
        if (dayOfWeek === "Friday") {
            price = 10.90;
        } else if (dayOfWeek === "Saturday") {
            price = 15.60;
        } else if (dayOfWeek === "Sunday") {
            price = 16;
        }

        if (groupOfPeople >= 100) {
            groupOfPeople -= 10;
        }

        totalPrice = price * groupOfPeople;

    } else if (typeOfGroup === "Regular") {
        if (dayOfWeek === "Friday") {
            price = 15;
        } else if (dayOfWeek === "Saturday") {
            price = 20;
        } else if (dayOfWeek === "Sunday") {
            price = 22.50;
        }

        totalPrice = price * groupOfPeople;

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            totalPrice *= 0.95;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday");

vacation(40,
    "Regular",
    "Saturday")