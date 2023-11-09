function signCheck(firstNum, secondNum, thirdNum) {
    const result = firstNum * secondNum * thirdNum;

    if (result > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(-6, -12, 14);