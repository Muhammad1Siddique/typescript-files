console.log("Pakistan Zindabad!");

let a = "Pakistan";
//a = true; bolean type not allow
console.log(a);

let student = {
    'name' : "Hassan",
    'class': "18"
};
//console.log(student.age); age property is not exist
console.log(student.name);

function num(count:number){
    console.log(count);
}

//num("game"); // Argument of type 'string' is not assignable to parameter of type 'number'

num(29);