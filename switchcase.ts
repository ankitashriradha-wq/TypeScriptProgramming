
//swtich case with enums
//enum is not applicable in javascript

enum Browser{

    Firefox_1 = "firefox",
    Safari_2 = "safari",
    Chrome_3 = "chrome",
    Edge_4 = "Edge"

}


let browserInvoke : string = Browser.Chrome_3;

switch(browserInvoke){

    case Browser.Chrome_3:
        console.log("chrome Browser")
        break;

    case "FF":
        console.log("FF Browser")
        break;
    case "Safari":
        console.log("Safari Browser");
        break;

    default :
        console.log("any browser");
        break;

}

//use cases:
//1. RBAC: admin, seller, partner, vendor, cat manager
//2. multi envs: DEV, QA, STAGE, UAT, PROD
//3. Cross browser logic

