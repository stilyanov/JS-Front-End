function sumDigits(number) {
    let numberAsString = String(number);
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++) {
        num = Number(numberAsString[i]);
        sum += num;
    }

    console.log(sum);
}

sumDigits(543);