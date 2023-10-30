function theatrePromotions(day, age) {
    let price = 0;
    let isValid = true;

    if (age >= 0 && age <= 18) {
        if (day === "Weekday") {
            price = 12;
        } else if (day === "Weekend") {
            price = 15;
        } else if (day === "Holiday") {
            price = 5;
        } else {
            isValid = false;
        }
    } else if (age > 18 && age <= 64) {
        if (day === "Weekday") {
            price = 18;
        } else if (day === "Weekend") {
            price = 20;
        } else if (day === "Holiday") {
            price = 12;
        } else {
            isValid = false;
        }
    } else if (age > 64 && age <= 122) {
        if (day === "Weekday") {
            price = 12;
        } else if (day === "Weekend") {
            price = 15;
        } else if (day === "Holiday") {
            price = 10;
        } else {
            isValid = false;
        }
    } else {
        isValid = false;
    }

    if (!isValid) {
        console.log("Error!");
    } else {
        console.log(price + "$");
    }
}

theatrePromotions('Holiday', 15)