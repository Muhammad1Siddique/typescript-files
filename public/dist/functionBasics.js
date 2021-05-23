"use strict";
var great;
//great = "salam";
great = function () {
    console.log("Greatings");
};
great();
var add = function (a, b, c) {
    if (c === void 0) { c = 21; }
    console.log(a + b);
    console.log(c);
};
add(23, ' game', 43);
var minus = function (a, b) {
    return a + b;
};
var result = minus(13, 5);
console.log(result);
