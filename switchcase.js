"use strict";
//swtich case with enums
var Browser;
(function (Browser) {
    Browser["Firefox_1"] = "firefox";
    Browser["Safari_2"] = "safari";
    Browser["Chrome_3"] = "chrome";
    Browser["Edge_4"] = "Edge";
})(Browser || (Browser = {}));
let browserInvoke = Browser.Chrome_3;
switch (browserInvoke) {
    case Browser.Chrome_3:
        console.log("chrome Browser");
        break;
    case "FF":
        console.log("FF Browser");
        break;
    case "Safari":
        console.log("Safari Browser");
        break;
    default:
        console.log("any browser");
        break;
}
//use cases:
//1. RBAC: admin, seller, partner, vendor, cat manager
//2. multi envs: DEV, QA, STAGE, UAT, PROD
//3. Cross browser logic
