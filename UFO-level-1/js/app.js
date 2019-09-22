//from data.js
let tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
// YOUR CODE HERE!
​
function newTable(data){
  tbody.html("");
  data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.values(sighting).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
​
​
​
​
button.on("click", function() {
​
   d3.event.preventDefault();
​
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
  if(inputValue){
    var filteredData = tableData.filter(d => d.datetime === inputValue);
    console.log(filteredData)
    newTable(filteredData)
  
  }
});
// Build Table with data.js 
 newTable(tableData);