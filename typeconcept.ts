//Tyepscript is a statically typed language
//Type Inference
//Type Annotation



let num: number; //Type Annotation
num = 90;

let n: number =50;
let LName: string ="ShriRamJi";

let test = "typescript"; // tyep = string -- CT --> Type Inference
let billAmount = 1000; // type = number -- CT --> Type inference

export{}
let isActive : boolean = true;

//null and undefined
let city: null = null;
let country: undefined = undefined;

//any , generally use for dynamic datas
let value:any = 80;
value = "QA";
value = true;

//void: function doesnot return any value:
function  printHello():void{ //return type: void -- CT
    console.log("hellow");
    return;

}

function getNumber(): number{ // return type: number -- CT
    return 159;

}

function getAny(): any{ // return type: any -- CT -- string
    return "pass";
}

function addition(a: any ,b: any){
    return a+b; // 30 -- number --CT-- type inference will be applied as number
}
addition(10,20);

function add(a:number, b:number){
    return(a+b); //CT -- RETURN TYPE: number
}

