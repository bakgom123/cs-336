// Homework 06 populateTable JavaScript file
// David Yoo, gy24, Oct 18,2022
"use strict";
 
//gets the data for the rows from the DataService class and calls createRow
//on all of the returned data
async function addDataRows() {
    let parentElem = document.getElementById("personalInfoTable");
    const dataService = new DataService();
    await dataService.fetchData();
    let rowData = dataService.getData();
    console.log(rowData);
    rowData.forEach(element => createRow(parentElem, element));
}

//creates a row with data provieded in rowData and adds it to the DOM under the
//parentElm
function createRow(parentElm, rowData) {
    let row = parentElm.insertRow(-1);
    row.insertCell(0).innerHTML = rowData.name.first + " " + rowData.name.last;
    row.insertCell(1).innerHTML = rowData.gender;
    row.insertCell(2).innerHTML = rowData.location.street.number + " " + rowData.location.street.name + rowData.location.city + ", " 
        + rowData.location.street.state + ", " + rowData.location.country;
    row.insertCell(3).innerHTML = rowData.age;
    row.insertCell(4).innerHTML = rowData.phone;    
    
    const imgs = document.createElement("img");
    const renderImg = row.insertCell(5);
    imgs.src = rowData.picture.medium
    renderImg.appendChild(imgs);
    
}