//Tuple: fixed size, order matters
//tuple vs array
// array is Dynamic : In runtime more values can be added

let person: [string , number , boolean]= ["ankita", 77, false];
let box: [string , number] =["box1", 2];

console.log(person[2]);
console.log(box[0]);

let data:[string , number][]= [["abc",100], ["Ram", 122]];
console.log(data[0]);
console.log(data[0], data[0]);


let customer: [string , number ]= ["ankita", 77];
customer.push("Ravi", 200);
console.log(customer);