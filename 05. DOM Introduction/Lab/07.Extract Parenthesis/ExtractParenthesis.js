function extract(element) {
    let para = document.getElementById(element).textContent;
    let pattern = /\(([^)]+)\)/gm;
    let result = [];

    let match = pattern.exec(para);
    while(match) {
        result.push(match[1]);

        match = pattern.exec(para);
    }

    return result.join("; ");
}