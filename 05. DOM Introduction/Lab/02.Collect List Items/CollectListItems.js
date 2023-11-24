function extractText() {
    let liElements = document.getElementsByTagName("li");
    let text = "";

    for (let i = 0; i < liElements.length; i++) {
        text += liElements[i].textContent + "\n";
    }

    let resultTextArea = document.getElementById("result");
    resultTextArea.value = text;
}