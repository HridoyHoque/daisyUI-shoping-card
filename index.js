document.getElementById("btn-first").addEventListener('click', function () {
   const FirstCardName = document.getElementById("First-card-name").innerText;

   const FirstCardprice = document.getElementById("First-card-price").innerText;

   const FirstCardQuantity = document.getElementById("First-card-quantity").innerText;

   // console.log(FirstCardName , FirstCardprice , FirstCardQuantity)
   const Total = parseInt(FirstCardprice) * parseInt(FirstCardQuantity)
   const TableContainer = document.getElementById("table-container")
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td>${1}</td>
   <td>${FirstCardName}</td>
   <td>${FirstCardprice}</td>
   <td>${FirstCardQuantity}</td>
   <td>${Total}</td>
   
   `;
   TableContainer.appendChild(tr);
})
