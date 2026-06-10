"use strict";
//Optional parameters
function getInformation(firstName, age) {
    return firstName + " " + age;
}
//getInformation("Radha") --> ERROR
//Error as you're  passing only 1 parameter but 2 is needed to void is error 
// make 2nd parameter optional by writing "?" after age field
console.log(getInformation("Radha"));
console.log(getInformation("Ramji", 233));
//Default parameters
function setDetials(name, mesg = "welcome") {
    return mesg + '  ' + name;
}
console.log(setDetials('Ankita'));
console.log(setDetials('Ankita', 'overriding welcome'));
console.log(setDetials('Ankita', undefined));
