// from data.js
let tableData = data;

var tbody = d3.select("tbody"); 

// YOUR CODE HERE!
  data.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
      var cell = row.append("td");
      cell.text(value);
      tbody.html(""); 
    });
  });


var button = d3.select("#filter-btn");
button.on("click", function() {
  d3.event.preventDefault(); 
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue); 
  console.log(filteredData)
  var filteredData = tableData.filter(d => d.datetime === inputValue);
  
}); 




 
