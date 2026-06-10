// Arrow function : => fat arrow or lambda function
// Anonymous function: without name

let info = () =>{
    console.log("Lambda function in TS")
}

let printInfo = ()=> console.log("hello lambda");

info();
printInfo();



let addNum = (x:number , z:number): number=>{
    return x+z;
}

console.log(addNum(28, 67));

let sumNum =(x:number, y:number): number => x+y;
console.log(sumNum(33,89));

class Person{
    firstName : string ;
    age : number;

    constructor(firstName : string, age: number){
        this.firstName = firstName;
        this.age = age;
    }

    display = ()=> console.log(this.firstName, this.age);
}

     let p = new Person('ankita', 23);
     p.display();
