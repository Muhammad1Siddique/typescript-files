"use strict";
//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Zeeshan', 'onlinestore', 300);
var invTwo = new Invoice('Javeria', 'digital Marketing', 500);
//console.log(invOne, invTwo);
var Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
//console.log(Invoices);
Invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var detail1 = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, detail1.value, amount.value);
});
