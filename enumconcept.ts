//Enum: Enumeartion: data types: hold the set of constants
//numeric
//string
//heterogenous

//numeric
enum Browser{
    
    Firefox, // non initialiser have to write in the begining/start
    Safari,
    Edge,
    Chrome= getVersion('chrome') // chrome is initialised thats why we put it at the end
}

function getVersion(browserName: string):number{
if(browserName=="chrome"){
    return 135;
}

    return -1;
}
console.log(Browser.Chrome);


//Enum environment values

enum enivronment{
    DEV = "dev",
    QA = "qa",
    STAGE = "stage",
    PROD = "prod"
}

console.log(enivronment.DEV);
console.log(enivronment['STAGE']);


//Heterogenous Enum

enum Status{
    ACTIVE ='active',
    DEACTIVE = 1,
    PENDING


}

console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);





