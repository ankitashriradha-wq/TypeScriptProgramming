"use strict";
//functions in TS
//void
//return
//take parameter
//name function: function which is having a name
function getInfo() {
    console.log("hello info");
}
getInfo();
function add(a, b) {
    console.log(a + b);
}
add(300, 78); // call by value -- arguments
function calNumbers(a, b, c) {
    let total = a + b - c;
    return total;
}
let resultVal = calNumbers(33, 89, 90);
console.log(resultVal);
