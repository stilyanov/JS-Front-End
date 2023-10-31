function cookingByNumbers(numberAsString, op1, op2, op3, op4, op5) {
    let number = String(numberAsString);

    let arrayOp = [];
    arrayOp.push(op1);
    arrayOp.push(op2);
    arrayOp.push(op3);
    arrayOp.push(op4);
    arrayOp.push(op5);

    for(let i = 0; i < arrayOp.length; i++) {
        let currentOperation = arrayOp[i];

        switch(currentOperation) {
            case "chop": number /= 2; break;
            case "dice": number =Math.sqrt(number); break;
            case "spice": number += 1; break;
            case "bake": number *= 3; break;
            case "fillet": number *= 0.8; break;
        }

        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')