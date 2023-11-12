function palindromeIntegers(arrayOfNumbers) {
    let reversedNum = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const currentNum = arrayOfNumbers[i];
        reversedNum = Number(String(currentNum).split("").reverse().join(""));

        if (currentNum === reversedNum) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindromeIntegers([32,2,232,1010]);