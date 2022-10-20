// Homework 05 dataService JavaScript file
// David Yoo, gy24, Oct 03,2022

class DataService{
    data=[{name: "David Yoo", gender: "Male", address: "Gamma 10", age: 24, phone:"123-456-7890"},
        {name: "Gunju Yoo", gender: "Male", address: "Gamma 10", age: 26, phone:"012-345-6789"},
        {name: "Hayoung Yoo", gender: "Female", address: "Gamma 10", age: 19, phone:"111-222-3333"},
    ];
    constructor() {};
    // If the parameter is not provided, then return the whole data array. 
    // Otherwise, return only the first numRecords of the data array.
    getData(numRecords){
        return (numRecords !== null ? this.data.slice(0, numRecords) : this.data); 
    }
}

// TEST CODE
function test(){
    const testData = new DataService();

    data1 = testData.getData(2);
    console.log("test 1");
    console.log(data1[0]);
    console.log(data1[1]);
    console.log(data1[2]);

    data2 = testData.getData();
    console.log("test 2");
    console.log(data2[2]);
    console.log(data2[2].name);
    console.log(data2[2].age);

    data3 = testData.getData(0);
    console.log("test 3");
    console.log(data3[2]);
    console.log(data3[2].name);
    console.log(data3[2].age);

    data4 = testData.getData(-1);
    console.log("test 4");
    console.log(data4[0]);
    console.log(data4[1]);
    console.log(data4[2]);
}

test();
