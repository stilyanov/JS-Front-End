function printAndSum(startNum, endNum) {
    let sum = 0;
    let buff = "";

    for (let i = startNum; i <= endNum; i++) {
        buff += i + " ";
        sum += i;
    }

    console.log(buff);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 50);