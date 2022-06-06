function findCountry() {
  let filter = document.getElementById("filter").value.toUpperCase();
  console.log("filter");

  let table = document.getElementById("table");

  let tr = table.getElementsByTagName("tr");

  for(var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if(td) {
      let textvalue = td.textConetent || td.innerHTML;
      
      if(textvalue.toUpperCase().indexOf(filter)> -1) {
        tr[i].style.display = "";
      }else {
        tr[i].style.display = "none";
      }
    }
  }
}

var table = document.getElementById("table");
var addurl = "http://universities.hipolabs.com/search?country";
fetch (addurl)
.then ((response) => {

  return response.json();
})
.then((data) => {
  console.log(data);
  var tr = document.createElement("tr");
  var td1 = document.createElement("th");
  td1.innerText = "Country";
  var td2 = document.createElement("th");
  td2.innerText = "Web Page";
  var td3 = document.createElement("th");
  td3.innerText = "Alpha Two Code";
  var td4 = document.createElement("th");
  td4.innerText = "State Province";
  var td5 = document.createElement("th");
  td5.innerText = "Domains";
  tr.append(td1, td2, td3, td4, td5);
  table.appendChild(tr);

  for(var i = 0; i <= 200; i = i + 1) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    td1.innerText = data[i].country;
    td2.innerText = data[i].web_pages;
    td3.innerText = data[i].alpha_two_code;
    td4.innerText = data[i].stateprovince;
    td5.innerText = data[i].domains;
    tr.append(td1, td2, td3, td4, td5);
    table.appendChild(tr);
  }
}) 
.catch((err) => {
  console.log("Failed");
})