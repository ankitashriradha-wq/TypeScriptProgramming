//Optional parameters

function getInformation(firstName:string , age?:number): string{
    return firstName +" "+age;
}

//getInformation("Radha") --> ERROR
//Error as you're  passing only 1 parameter but 2 is needed to void is error 
// make 2nd parameter optional by writing "?" after age field

console.log(getInformation("Radha"));
console.log(getInformation("Ramji", 233));


//Default parameters
function setDetials(name:string, mesg: string ="welcome"): string{
    return mesg+'  '+name;

}

console.log(setDetials('Ankita'));
console.log(setDetials('Ankita', 'overriding welcome'));
console.log(setDetials('Ankita', undefined)); // it will print/prefer default arguments ie Ankita , welcome