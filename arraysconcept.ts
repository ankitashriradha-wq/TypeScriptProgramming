let names: string[] = ["tom", "ankita", "manish", "radha"];
console.log(names[2]);
names.push("testing");

console.log(names[names.length-1]);



//using generics
let empNames: Array<string>= ["abc","Ram", "Hanuman","Krishna"];
let empIds: Array<number> = [33,44,12,33];
let empInfo: Array<any> = ["Ankita", true, null, 22];

//multi type array:
let values: (string | number)[] =["Ank", 100, "Manish", 300];
let val: Array<string | boolean>=["Ram", true];

//first array declaration and then initialisation:
let users: Array<string>;
users = ["Hanumanji" ,"Ramji", "Radha"];

let employees: Array<string>=["abc", "efg", "ijh"];

for(let i=0; i<employees.length; i++){
    console.log(employees[i]);
}

//2
console.log("-------------------------")
for(let e in employees){
    console.log(e +":"+ employees[e])
}



