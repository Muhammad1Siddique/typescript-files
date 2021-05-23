"use strict";
//explicit types
var person = 'siddique';
var personage = 29;
var button = true;
//person = 29; only string allow
//personage = "siddique" only number allow
//button = %# only boolean allow
console.log(person, personage, button);
//arrays
var personlist = [];
personlist.push("siddique");
//personlist.push(29) only string allow
var personagelist = [];
personagelist.push(29);
//personagelist.push('siddique') only allow number
console.log(personlist, personagelist);
//union types
var mixdetails = [];
mixdetails.push('siddique');
mixdetails.push(29);
mixdetails.push(false);
console.log(mixdetails);
var uid = 'siddique';
uid = 29;
console.log(uid);
//objects
var ninjaOne;
ninjaOne = ['siddique', 'shafique'];
ninjaOne = { name: 'siddique', age: 29 };
var ninjaTwo;
ninjaTwo = { name: 'siddique', age: 29, beltColor: 'green' };
console.log(ninjaOne, ninjaTwo);
