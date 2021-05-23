type stringOrNum = string | number;
type objWithName = {name: string, uid: stringOrNum}

const logDetails = (uid: stringOrNum, item: string) =>{
    console.log(`${item} has a uid of ${uid}`);
}
logDetails('pakistan', 'Football');
const greats = (user:objWithName)=>{
    console.log(`${user.name} says hello`);
}
let dots={
    name: 'Pakistan',
    uid: 43
}
greats(dots);
const greatsagain = (user:objWithName)=>{
    console.log(`${user.name} says hello`);
}
greatsagain(dots);