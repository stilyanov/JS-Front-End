function colorize() {
    let table = document.querySelector("table").rows;

    for (let i = 0; i < table.length; i++) {
        if (i % 2 !== 0) {
            table[i].style.background = "Teal";
        }
    }
}