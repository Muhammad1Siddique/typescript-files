//let great1: Function;

// example 1
let greet1: (a:string, b:string)=>void;

greet1 = (name: string, greeting: string)=>{
    console.log(`${name} says ${greeting}`);
}
greet1("Tariq", "Asslam o Alikum");

// example 2
let calc: (a:number, b:number, c:string)=> number;

calc = (numOne: number, numTwo: number, action: string)=>{
    if(action === 'add'){
        return numOne + numTwo;
    }else {
        return numOne - numTwo;
    }
}

console.log(`Result: ${calc(443, 43, "add")}`);
// example 3
let logDetail:(obj: {name:string, age: number})=> void;

let obj1 ={
    name:"Siddique",
    age: 29
}

logDetail = (obj:{name:string, age:number}) =>{
    console.log(obj);
}

logDetail(obj1);