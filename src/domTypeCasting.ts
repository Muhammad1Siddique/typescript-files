// const anchor = document.querySelector("a");
// if(anchor){
//     console.log(anchor.href);
// }

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