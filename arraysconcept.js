"use strict";
let names = ["tom", "ankita", "manish", "radha"];
console.log(names[2]);
names.push("testing");
console.log(names[names.length - 1]);
//using generics
let empNames = ["abc", "Ram", "Hanuman", "Krishna"];
let empIds = [33, 44, 12, 33];
let empInfo = ["Ankita", true, null, 22];
//multi type array:
let values = ["Ank", 100, "Manish", 300];
let val = ["Ram", true];
//first array declaration and then initialisation:
let users;
users = ["Hanumanji", "Ramji", "Radha"];
let employees = ["abc", "efg", "ijh"];
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
//2
console.log("-------------------------");
for (let e in employees) {
    console.log(e + ":" + employees[e]);
}
