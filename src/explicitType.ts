//explicit types
let person: string = 'siddique';
let personage: number = 29;
let button: boolean = true;
//person = 29; only string allow
//personage = "siddique" only number allow
//button = %# only boolean allow
console.log(person, personage, button);
//arrays
let personlist: string[] = [];
personlist.push("siddique");
//personlist.push(29) only string allow
let personagelist: number[]= [];
personagelist.push(29);
//personagelist.push('siddique') only allow number
console.log(personlist, personagelist);
//union types
let mixdetails:(string|number|boolean)[] = [];
mixdetails.push('siddique');
mixdetails.push(29);
mixdetails.push(false);
console.log(mixdetails);
let uid: string|number = 'siddique';
uid = 29;
console.log(uid);
//objects
let ninjaOne: object;
ninjaOne = ['siddique', 'shafique'];
ninjaOne = {name: 'siddique', age: 29};
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {name:'siddique', age:29, beltColor: 'green'};
console.log(ninjaOne, ninjaTwo);