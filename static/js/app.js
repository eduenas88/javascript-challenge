// from data.js
let tableData = data;
console.log(data);
var tbody = d3.select("tbody"); 


// YOUR CODE HERE!
function tableData(data){
  tbody.html(""); 
  data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}; 
