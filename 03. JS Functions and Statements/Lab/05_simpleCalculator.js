function simpleCalculator(firstNum, secondNum, operator) {
    const operations = {
        multiply: (firstNum, secondNum) => firstNum * secondNum,
        divide: (firstNum, secondNum) => firstNum / secondNum,
        add: (firstNum, secondNum) => firstNum + secondNum,
        subtract: (firstNum, secondNum) => firstNum - secondNum,
    };

    const operatorFunction = operations[operator];
    const result = operatorFunction(firstNum, secondNum);
    console.log(result);
}

simpleCalculator(5, 5, 'multiply'); // 25
simpleCalculator(40, 8, 'divide'); // 5
simpleCalculator(12, 19, 'add'); // 31
simpleCalculator(50, 13, 'subtract'); // 37