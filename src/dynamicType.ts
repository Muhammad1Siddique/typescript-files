let babyage: any = 3;
babyage = 'ramzan';
babyage = true;
console.log(babyage);
babyage = {name: 'zeeshan', age:1};
console.log(babyage);

let fullmixed:any[] = [];
fullmixed.push('siddique');
fullmixed.push(29);
fullmixed.push(false);
fullmixed.push({name:'siddique', age: 29, emp: false});
console.log(fullmixed);

let ninja: {name:any, age:any};

ninja ={ name: 'siddique', age: 29};
console.log(ninja);

ninja = { name: 29, age: 'siddique'};
console.log(ninja);
