function reverseAnArray(n, inputArray) {
    let reversedArray = [];

    let newArray = [];
    for (let i = 0; i < n; i++) {
        const element = inputArray[i];
        reversedArray.push(element);
    }

    for (let i = reversedArray.length - 1; i >= 0; i--) {
        const element = reversedArray[i];
        newArray.push(element);

    }
    console.log(newArray.join(" "));
}

reverseAnArray(3, [10, 20, 30, 40, 50]);