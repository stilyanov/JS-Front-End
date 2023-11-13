function factorialDivision(firstNum, secondNum) {

    function calculateFact (number) {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        return fact;
    }

    let firstNumFact = calculateFact(firstNum);
    let secondNumFact = calculateFact(secondNum);
    let total = firstNumFact / secondNumFact;
    console.log(total.toFixed(2));
}

factorialDivision(6, 2);