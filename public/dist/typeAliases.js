"use strict";
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
logDetails('pakistan', 'Football');
var greats = function (user) {
    console.log(user.name + " says hello");
};
var dots = {
    name: 'Pakistan',
    uid: 43
};
greats(dots);
var greatsagain = function (user) {
    console.log(user.name + " says hello");
};
greatsagain(dots);
