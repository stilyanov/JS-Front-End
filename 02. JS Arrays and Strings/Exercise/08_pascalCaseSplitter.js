function solve(text) {
    let regex = /[A-Z][a-z]*/gm;
    let match = text.match(regex);

    console.log(match.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');