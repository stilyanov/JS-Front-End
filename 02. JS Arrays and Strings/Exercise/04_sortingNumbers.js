function sortNumbers(numbersArr) {
    let outputArr = [];
    let sortedArr = numbersArr.sort((a, b) => a - b);
    let arrayLength = numbersArr.length;

    for (let i = 0; i < arrayLength; i++) {
        if (i % 2 === 0) {
            outputArr.push(sortedArr.shift());
        } else {
            outputArr.push(sortedArr.pop());
        }
    }
    return outputArr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);