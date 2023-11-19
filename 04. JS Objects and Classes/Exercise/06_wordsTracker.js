function wordTracker(input) {

    let stringList = input.shift().split(" ");

    let occurances = {};

    stringList.forEach((word) => {
        occurances[word] = 0;

        input.forEach((element) => {
            if (word === element) {
                occurances[word] += 1;
            }
        });

    });

    let counterSorted = Object.entries(occurances).sort((a,b) => b[1] - a[1]);

    for (const [key, value] of counterSorted) {
        console.log(`${key} - ${value}`);
    }
}

wordTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
