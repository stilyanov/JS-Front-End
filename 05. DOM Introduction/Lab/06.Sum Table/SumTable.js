function sumTable() {
    let table = document.querySelectorAll("td");
    let sum = document.getElementById("sum");

    let totalSum = 0;

    for (let i = 0; i < table.length - 1; i++) {
        if (i % 2 !== 0) {
            totalSum += Number(table[i].textContent);
        }        
    }

    sum.textContent = totalSum.toFixed(2);
}