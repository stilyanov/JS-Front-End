function solve(input) {
    input = input.toLowerCase();
    let arrayOfWords = input.split(" ");

    let map = new Map();

    arrayOfWords.forEach((word) => {

        if (map.has(word)) {
            let oldValue = map.get(word);
            let newValue = oldValue + 1;

            map.set(word, newValue);
        } else {
            map.set(word, 1);
        }
    });

    let result = [];

    map.forEach((value, key) => {
        if(value % 2 !== 0) {
            result.push(key)
        }
    });

    console.log(result.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');