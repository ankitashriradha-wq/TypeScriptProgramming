"use strict";
// Typescript provides the concept of function overloading
// you can have multiple functions
// need to implemenet with function body only **once
// function add(a:any , b:any): any{
//     return a+b;
// }
function add(a) {
    return a;
}
let o1 = add('hellow', 'world');
let o2 = add(4636, 78);
let o3 = add(true, false);
console.log(o1);
console.log(o2);
console.log(o3);
