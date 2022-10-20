// Homework 05 populateTable JavaScript file
// David Yoo, gy24, Oct 03,2022
// insertCell from https://www.w3schools.com/jsref/met_tablerow_insertcell.asp

addDataRows = () => {
    ds = new DataService();
    newData = ds.getData();
    console.log(newData);

    table = document.getElementById('personalInfoTable');
    // repeatedly call createRow() on each data object
    newData.forEach(rowData => {
        createRow(table, rowData)
    });
}

createRow = (parentElem, rowData) => {
    row = parentElem.insertRow(-1);
    row.insertCell(0).innerHTML = rowData.name;
    row.insertCell(1).innerHTML = rowData.gender;
    row.insertCell(2).innerHTML = rowData.address;
    row.insertCell(3).innerHTML = rowData.age;
    row.insertCell(4).innerHTML = rowData.phone;
}