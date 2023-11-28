function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let people = Array.from(document.querySelectorAll("tbody > tr"));

      let searchField = document.getElementById("searchField").value;

      people.forEach((p) => {

         p.classList.remove("select");
         if (p.textContent.includes(searchField) && searchField.length > 0) {
            p.className = "select";
         }
      });

      searchField = "";
   }
}