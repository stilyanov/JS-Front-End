function solve() {

    let text = document.getElementById("text").value.toLowerCase().split(" ");
    let currentCase = document.getElementById("naming-convention").value;

    let result = document.getElementById("result");


    if (currentCase === "Camel Case") {   

        for (let index = 1; index < text.length; index++) {
            text[index] = text[index].charAt(0).toUpperCase() + text[index].substring(1);
        }

        result.textContent = text.join("");

    } else if (currentCase === "Pascal Case") {

        for (let index = 0; index < text.length; index++) {
            text[index] = text[index].charAt(0).toUpperCase() + text[index].substring(1);
        }

        result.textContent = text.join("");
    } else {

        result.textContent = "Error!";

    }
}