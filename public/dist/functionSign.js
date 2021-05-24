"use strict";
//let great1: Function;
// example 1
var greet1;
greet1 = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greet1("Tariq", "Asslam o Alikum");
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log("Result: " + calc(443, 43, "add"));
// example 3
var logDetail;
var obj1 = {
    name: "Siddique",
    age: 29
};
logDetail = function (obj) {
    console.log(obj);
};
logDetail(obj1);
