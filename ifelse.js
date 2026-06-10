"use strict";
let flagg = true;
if (flagg) {
    console.log("pass");
}
else {
    console.log("fail");
}
let x = 10, y = 20;
if (x > y) {
}
else {
}
//if-else if:
let a = 900;
let b = 400;
let c = 100;
if (a > b && a < c) {
    console.log("a is the greatest");
}
else if (b > c) {
    console.log("c isthe greatest");
}
//Ternary Operator
let i = 100;
let j = 200;
i < j ? console.log("i is gr than j") : console.log("j is gr than i");
let browser = "gg";
(browser == "chrome") ? console.log("launch chrome") : browser == "firefox" ? console.log("launch firefox")
    : console.log("please pass the correct browser");
