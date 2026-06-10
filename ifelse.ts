let flagg : boolean = true;

if(flagg){

    console.log("pass");
}
    else{
        console.log("fail");
    }
let x:number =10, y:number=20;
if(x>y){

}
else{

}

//if-else if:
let a:number =900;
let b:number =400;
let c:number =100;

if(a>b && a<c){

    console.log("a is the greatest");

}
else if(b>c){
    console.log("c isthe greatest");
}

//Ternary Operator
let i:number = 100;
let j:number = 200;

i<j ? console.log("i is gr than j") : console.log("j is gr than i")

let browser: string="gg";

(browser == "chrome") ? console.log("launch chrome") : browser == "firefox"? console.log("launch firefox")
:console.log("please pass the correct browser");
