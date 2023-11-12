function addAndSubtract(num1, num2, num3) {

    function sum(first, second) {
        return result = first + second;
    }

    function subtract(sum, second) {
        return result = sum - second;
    }

    let add = sum(num1, num2);
    let minus = subtract(add, num3);

    console.log(minus);
}

addAndSubtract(1,
    17,
    30)