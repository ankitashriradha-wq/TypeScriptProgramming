"use strict";
let userId;
userId = 10001;
userId = "Ankita";
function getUserInformation(customerID) {
    if (typeof (customerID) == 'number') {
        return customerID + "_Ankita";
    }
    else if (typeof (customerID) == 'string') {
        return customerID + "_Ankita";
    }
}
console.log(getUserInformation("qa_automation"));
console.log(getUserInformation(9001));
