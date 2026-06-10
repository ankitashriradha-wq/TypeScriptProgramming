"use strict";
// Arrow function : => fat arrow or lambda function
// Anonymous function: without name
let info = () => {
    console.log("Lambda function in TS");
};
let printInfo = () => console.log("hello lambda");
info();
printInfo();
let addNum = (x, z) => {
    return x + z;
};
console.log(addNum(28, 67));
let sumNum = (x, y) => x + y;
console.log(sumNum(33, 89));
class Person {
    firstName;
    age;
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    display = () => console.log(this.firstName, this.age);
}
let p = new Person('ankita', 23);
p.display();
