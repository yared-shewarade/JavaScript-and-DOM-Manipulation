// from data.js
var tableData = data;

// YOUR CODE HERE!

//  Create function to update the html table
function updateTable(inputData) {


    // Get a reference to the table body
    var tbody = d3.select("tbody");

   // Loop through each UFO Sighting, append rows and cells with the values of the UFOSighting 
    inputData.forEach(function (UFOSightingReport) {
        console.log(UFOSightingReport);
        var row = tbody.append("tr")
        Object.entries(UFOSightingReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
        cell.text(value);
        
        });
    });
    
};


// Show full table first time page loads
updateTable(tableData);

// Filter
// Select the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    // Clear the old table before loading the filter results
    d3.select("tbody").html("")

    console.log(filteredData);

    // Update table with filtered ddata
    updateTable(filteredData);
});



//Remove Filter

// Select the remove filter button
var removeFilter = d3.select("#remove-filter");

removeFilter.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();


    // Clear the old table before loading the results
    d3.select("tbody").html("")

    console.log(tableData);

    // Remove the filtered data and update table with full table data
    updateTable(tableData);

    //Empty text box and reset to placeholder 
    
    d3.select("#datetime").property("value", "");
});
