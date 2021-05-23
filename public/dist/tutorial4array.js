"use strict";
// Array
var namelist = ['Hussain', 'siddique', 'shafique', 'tariq'];
console.log(namelist);
namelist.push("Zeeshan");
console.log(namelist);
//namelist.push(43) other datatype value not allow
var agelist = [61, 29, 26, 21];
console.log(agelist);
agelist.push(1);
console.log(agelist);
//agelist.push('Zeeshan'); other datatype value not allow
var mixed = ['Hussain', 61, 'Siddique', 29, 'shafique', 26, 'tariq', 21];
console.log(mixed);
mixed.push('Zeeshan');
mixed.push(1);
console.log(mixed);
//mixed.push(true); remain other datatype value are not allow
// Object
var bio = {
    name: 'Muhammad Hussain',
    caste: 'sial',
    age: 61
};
console.log(bio);
bio.name = "Muhammad Siddique";
bio.caste = "sial";
bio.age = 29;
console.log(bio);
bio = {
    name: 'Muhammad Shafique',
    caste: 'sial',
    age: 26
};
console.log(bio);
bio = {
    name: 'Muhammad Tariq',
    caste: 'sial',
    age: 21,
    //profession: 'AI Expert' extra details not allow
};
console.log(bio);
bio = {
    //name: 32 different data type not allow
    name: 'Muhammad Zeeshan',
    caste: 'sial',
    age: 1
};
console.log(bio);
