//classes
class Invoice{
    client: string;
    details: string;
    amount: number;

    constructor(c:string, d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Zeeshan', 'onlinestore', 300);
const invTwo = new Invoice('Javeria', 'digital Marketing', 500);

//console.log(invOne, invTwo);
let Invoices: Invoice[] = [];
Invoices.push(invOne);
Invoices.push(invTwo);

console.log(Invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail1= document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        detail1.value,
        amount.value
    )
})