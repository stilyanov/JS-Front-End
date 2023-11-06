function solve(wordToFind, text) {
    let textArr = text.toLowerCase().split(" ");
    let output = `${wordToFind} not found!`;

    for (let i = 0; i < textArr.length; i++) {
        let currentWord = textArr[i];
        if (currentWord === wordToFind) {
            output = currentWord;
            break;
        }
    }
    console.log(output);
}

// solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');