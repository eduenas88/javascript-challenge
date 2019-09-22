// from data.js
var tableData = d3.select("data");

console.log(data);
// YOUR CODE HERE!
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  