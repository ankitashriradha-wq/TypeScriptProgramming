//functions in TS
//void
//return
//take parameter

//1. named function: function which is having a name
function getInfo(){ //0 parameter
 console.log("hello info")

}

getInfo();

function add(a:number , b:number){ //2 params

    console.log(a+b);
}
add(300, 78);// call by value -- arguments

function calNumbers(a:number , b:number, c:number): number{
    let total: number=a+b-c;
    return total;
}
let resultVal :number = calNumbers(33,89,90);
console.log(resultVal);

function isUserActive(userName : string): boolean{
    if(userName == 'Ankita'){
        return true
    }
    else{

        console.log("username not found" +userName);
        return false;
    } 
}


// ******
// 2. Anonymous function without  name function -- store in a variable
//call it using the  vairable name only

let displayInfo = function(){
    console.log("hello TS");
}

displayInfo();
//parameter in anonymous fucntion

let sum = function(x:number , y:number):number{
    return x+y;
}
let resultSum :number = sum(5,90);
console.log(resultSum);
