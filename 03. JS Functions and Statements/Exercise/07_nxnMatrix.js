function NxNMatrix(number) {
    function printRow (num) {
        let singleRow = (num.toString() + " ").repeat(num);

        return singleRow;
    }

    for (let row = 1; row <= number; row++) {
        console.log(printRow(number));
    }
}

NxNMatrix (3);