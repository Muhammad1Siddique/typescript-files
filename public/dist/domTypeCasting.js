"use strict";
// const anchor = document.querySelector("a");
// if(anchor){
//     console.log(anchor.href);
// }
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var detail1 = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, detail1.value, amount.value);
});
