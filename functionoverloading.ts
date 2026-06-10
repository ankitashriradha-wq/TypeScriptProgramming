// Typescript provides the concept of function overloading
// you can have multiple functions

//1. with same name
//2. but different parameter types and return type.
//3 . However, the number of parameters should be the same.

//provide  the implementation/prototype of function:
function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a:boolean, b:boolean):boolean;

// need to implemenet with function body only **once
 function add(a:any , b:any): any{

    return a+b;
}

// function add(a:any): any{

//     return a;
// }


let o1= add('hellow', 'world');
let o2= add(4636, 78);
let o3= add(true, false);

console.log(o1);
console.log(o2);
console.log(o3);
