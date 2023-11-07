function wordsUppercase(textToExtract) {
    let regex = /\w+/gm;
    let matches = textToExtract.match(regex);

    console.log(matches.join(", ").toUpperCase());
}

wordsUppercase('Hi, how are you?');