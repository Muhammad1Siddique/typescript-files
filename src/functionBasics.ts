let great: Function;
//great = "salam";

great = ()=>{
    console.log("Greatings");
}

great();

const add = (a:number, b:string, c:number | string = 21):void=>{
    console.log(a + b);
    console.log(c);
}
add(23, ' game', 43);

const minus = (a:number, b:number):number=>{
    return a+b;
}

let result = minus(13,5);
console.log(result)