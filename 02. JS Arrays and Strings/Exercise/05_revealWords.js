function revealWords(words, text) {
    let wordsArray = words.split(", ");
    let textArray = text.split(" ");

    for (let i = 0; i < wordsArray.length; i++) {

        for (let j = 0; j < textArray.length; j++) {

            if (textArray[j].includes("*") && wordsArray[i].length === textArray[j].length) {
                textArray[j] = wordsArray[i];
            }
        }
    }

    console.log(textArray.join(" "));
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');

// revealWords('great',
//     'softuni is ***** place for learning new programming languages');