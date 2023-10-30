function monthPrinter(number) {
    let message = "";
    if (number === 1) {
        message = "January";
    } else if (number === 2) {
        message = "February";
    } else if (number === 3) {
        message = "March";
    } else if (number === 4) {
        message = "April";
    } else if (number === 5) {
        message = "May";
    } else if (number === 6) {
        message = "June";
    } else if (number === 7) {
        message = "July";
    } else if (number === 8) {
        message = "August";
    } else if (number === 9) {
        message = "September";
    } else if (number === 10) {
        message = "October";
    } else if (number === 11) {
        message = "November";
    } else if (number === 12) {
        message = "December";
    } else {
        message = "Error!";
    }

    console.log(message);
}

monthPrinter(-2)