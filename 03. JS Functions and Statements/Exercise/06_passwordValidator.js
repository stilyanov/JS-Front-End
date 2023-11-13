function passwordValidator(password) {

    function lengthChar(text) {
        return text.length >= 6 && text.length <= 10;
    }

    function lettersAndDigits(text) {
        let regex = /^[a-zA-Z0-9]+$/;
        let match = regex.test(text);

        return match;
    }

    function twoDigitsOrMore(text) {
        let counter = 0;

        for (const digit of text) {
            if (!isNaN(digit)) {
                counter++;
            }
        }

        return counter >= 2;
    }

    let validLength = lengthChar(password);
    let validNumeric = lettersAndDigits(password);
    let validDigitsCount = twoDigitsOrMore(password);

    if (!validLength) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!validNumeric) {
        console.log("Password must consist only of letters and digits");
    }

    if (!validDigitsCount) {
        console.log("Password must have at least 2 digits");
    }

    if (validLength && validNumeric && validDigitsCount) {
        console.log("Password is valid");
    }
}

passwordValidator('Pa$s$s');