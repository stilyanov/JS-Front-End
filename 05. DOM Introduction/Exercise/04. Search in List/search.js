function search() {
   let towns = Array.from(document.querySelectorAll("li"));

   let searchText = document.getElementById("searchText").value;

   let result = document.getElementById("result");
   
   let counter = 0;

   towns.forEach((town) => {
      town.style.fontWeight = "";
      town.style.textDecoration = '';

      if (town.textContent.includes(searchText)) {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   });

   result.textContent = `${counter} matches found`;

}
