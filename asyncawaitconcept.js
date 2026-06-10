"use strict";
// async function without await
async function f1() {
    console.log("this is async function without await");
    return 42; // return a promise(resolved) on top pf 42
}
f1()
    .then(result => {
    console.log(result);
});
async function f2() {
    console.log("this is async function with error");
    throw new Error("this is my error"); // return promise(rejected)
}
f2().catch(error => {
    console.log('error message ${Error}');
});
//async function with a resolved/reject promise:
function getInfo() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random < 0.5) {
                resolve(random);
            }
            else {
                reject(new Error("wrong value error"));
            }
        }, 2000);
    });
}
//create async function which is calling getInfo()
async function getNumInfo() {
    try {
        const result = await getInfo(); //async step
        console.log("Result:", result);
    }
    catch (error) {
        console.log("Error", error);
    }
}
//call getNumInfo() method:
getNumInfo();
