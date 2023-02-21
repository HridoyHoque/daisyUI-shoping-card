 
/* Card serial */ 

let serial = 0;
 
   /* 1st Card Button Handler */

document.getElementById("btn-first").addEventListener('click', function () {

   // Get Data
   serial += 1;
   const CardName = document.getElementById("First-card-name").innerText;

   const Cardprice = document.getElementById("First-card-price").innerText;

   const CardQuantity = document.getElementById("First-card-quantity").innerText;

   const Total = parseInt(Cardprice) * parseInt(CardQuantity)

   // Show the Data
   DisplayData(CardName, Cardprice, CardQuantity, Total)
})


      /*2nd Card Button Handler */

document.getElementById('btn-second').addEventListener('click', function(e){
    /* Get Data */
   serial += 1;
   const CardName = e.target.parentNode.parentNode.children[0].innerText
   // console.log(CardName)
   const Cardprice = e.target.parentNode.parentNode.children[2].children[0].innerText
   // console.log(Cardprice)
   const CardQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
  
   const SumTotal = parseInt(Cardprice) + parseInt(CardQuantity)
   console.log(SumTotal);

    // Show the Data
   DisplayData(CardName, Cardprice, CardQuantity, SumTotal)
})

       /*3rd Card Button Handler */

       document.getElementById('btn-third').addEventListener('click', function(e){
         /* Get Data */
        serial += 1;
        const CardName = e.target.parentNode.parentNode.children[0].innerText
        // console.log(CardName)
        const Cardprice = e.target.parentNode.parentNode.children[2].children[0].innerText
        // console.log(Cardprice)
        const CardQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
       
        const SubtractionTotal = parseInt(Cardprice) - parseInt(CardQuantity)
      //   console.log(SumTotal);
     
         // Show the Data
        DisplayData(CardName, Cardprice, CardQuantity, SubtractionTotal)
     })



     /*4th Card Button Handler */

     document.getElementById('btn-fourth').addEventListener('click', function(e){
      /* Get Data */
     serial += 1;
     const CardName = e.target.parentNode.parentNode.children[0].innerText
     // console.log(CardName)
     const Cardprice = e.target.parentNode.parentNode.children[2].children[0].innerText
     // console.log(Cardprice)
     const CardQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
    
     const SumTotal = parseInt(Cardprice) + parseInt(CardQuantity)
     console.log(SumTotal);
  
      // Show the Data
     DisplayData(CardName, Cardprice, CardQuantity, SumTotal)
  })

 /* last Card Button Handler */

document.getElementById("last-card").addEventListener('click', function () {

   // Get Data
   serial += 1;
   const CardName = document.getElementById("last-card-name").innerText;

   const Cardprice = document.getElementById("last-card-price").value;

   const CardQuantity = document.getElementById("last-card-quantity").value;

   const Total = parseInt(Cardprice) * parseInt(CardQuantity)

   if(Cardprice || CardQuantity != Number){
      alert("vaiiiiii valid input den to age")
      return;
   }

   // Show the Data
   DisplayData(CardName, Cardprice, CardQuantity, Total)
})

/* Common Function Display Data For All Cards */
   function DisplayData(CardName, Cardprice, CardQuantity, Total) {
   const TableContainer = document.getElementById("table-container")
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td>${serial}</td>
   <td>${CardName}</td>
   <td>${Cardprice}</td>
   <td>${CardQuantity}</td>
   <td>${Total}</td>
   
   `;
   TableContainer.appendChild(tr);
}
