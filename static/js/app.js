// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(data) {
 tbody.html("");

 data.forEach((dataRow) => {
   var row = tbody.append("tr");

   Object.values(dataRow).forEach((value) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });
}

var filters = {};

buildTable(tableData);