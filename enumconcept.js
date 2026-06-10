"use strict";
//Enum: Enumeartion: data types: hold the set of constants
//numeric
//string
//heterogenous
//numeric
var Browser;
(function (Browser) {
    Browser[Browser["Firefox"] = 0] = "Firefox";
    Browser[Browser["Safari"] = 1] = "Safari";
    Browser[Browser["Edge"] = 2] = "Edge";
    Browser[Browser["Chrome"] = getVersion('chrome')] = "Chrome"; // chrome is initialised thats why we put it at the end
})(Browser || (Browser = {}));
function getVersion(browserName) {
    if (browserName == "chrome") {
        return 135;
    }
    return -1;
}
console.log(Browser.Chrome);
//Enum environment values
var enivronment;
(function (enivronment) {
    enivronment["DEV"] = "dev";
    enivronment["QA"] = "qa";
    enivronment["STAGE"] = "stage";
    enivronment["PROD"] = "prod";
})(enivronment || (enivronment = {}));
console.log(enivronment.DEV);
console.log(enivronment['STAGE']);
//Heterogenous Enum
var Status;
(function (Status) {
    Status["ACTIVE"] = "Active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);
