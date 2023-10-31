function sameNumbers(number) {
    let numberAsString = String(number);
    let sum = 0;
    let isSame = true;

    let num = number.toString()[0];

    for(let i = 0; i < numberAsString.length; i++) {
        let currentNum = Number(numberAsString[i]);

        if(currentNum != num) {
            isSame = false;
            break;
        }
    }

    for(let i = 0; i < numberAsString.length; i++) {
        let currentNum = Number(numberAsString[i]);
        sum += currentNum;
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(1234);
sameNumbers(2222222);