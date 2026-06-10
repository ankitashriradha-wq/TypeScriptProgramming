//TSC 

//1. using<>
//2. using as keyword


//you know better than CT about data type beforehand
//override the concept of type inference, explicictly given data type to do type assertion

let totalBill: any = 123;
let finalBill = <number>totalBill + 200;
console.log(finalBill);

let someValue : any ="hello typescript with ankita";
let len =(someValue as string);
console.log(len);

let flag: any = true;
if (flag as boolean){

    console.log("Hello TS");

}
