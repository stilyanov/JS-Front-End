function solve(text) {
    let regex = /#[A-Za-z]+/gm;
    let matches = text.match(regex);

    for (let match of matches) {
        match = match.replace("#", "");
        console.log(match);
    }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");