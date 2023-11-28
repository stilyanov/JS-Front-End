function solve() {
    let input = document.getElementById("input").value.split(".").filter(s => s.length > 0).map(s => s += '.');

    let output = document.getElementById("output");

    while(input.length > 0) {
      let p = document.createElement('p');

      p.textContent = input.splice(0,3).join('');

      output.appendChild(p);
    }
}