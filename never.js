"use strict";
//let nothing: never ; // never cannot hold any value , not undefined , null as well
function throwError(mesg) {
    throw new Error(mesg);
}
//throwError("some error");
function displayMsg() {
    while (true) {
        console.log("Welcome to VS code");
    }
}
displayMsg();
console.log(displayMsg);
