function calc() {
    let firstNum = Number(document.getElementById("num1").value);
    let secondNum = Number(document.getElementById("num2").value);

    let sum = firstNum + secondNum;
    document.getElementById("sum").value = sum;
}
