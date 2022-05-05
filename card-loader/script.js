var url = "https://api2.binance.com/api/v3/ticker/24hr";
var container = document.querySelector(".container");

fetch(url)
   .then(res => res.json())
   .then((result) => {
      console.log(result);
      
      for( i = 0; i < 100; i++) {
         result[i];

         var div1 = document.createElement("div");
         div1.classList.add("details");
         container.appendChild(div1);

         var span1 = document.createElement("span");
         span1.classList.add("name");
         span1.innerText = "Currency-Name";

         var span2 = document.createElement("span");
         span2.classList.add("data");
         span2.innerText = result[i].symbol;

         var span3 = document.createElement("span");
         span3.classList.add("name");
         span3.innerText = "Price";

         var span4 = document.createElement("span");
         span4.classList.add("data");
         span4.innerText = result[i].bidPrice;

         var span5 = document.createElement("span");
         span5.classList.add("name");
         span5.innerText = "Count";

         var span6 = document.createElement("span");
         span6.classList.add("data");
         span6.innerText = result[i].count;

         div1.append(span1, span2, span3, span4, span5, span6);
         
      }
   });