function oddAndEvenSum(number) {
    let digits = number.toString().split("");

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < digits.length; i++) {
        let currentNum = Number(digits[i]);
        
        if (currentNum % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);