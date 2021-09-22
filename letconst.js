const hubby = "Salman Khan";
// hubby = "omar sunny"   // const not change value
console.log(hubby);

let hubbys = "Salman Khan";
hubbys = "omar khan";  // let change value
console.log(hubbys);

const numbers = [10,12,15,18];
numbers[2] = 23; // const array value change but full element not

// numbers = ['samir','basak','good','boy']; // const array full element not
numbers.push(100);
console.log(numbers);

const nayok = {name: 'samir',phone: '016235333',village:'dhaka'};
nayok.name = "basak";   // const object element change but full element not changed
// nayok = {name: 'yease',age:19,salary:25200}; //full element not changed
console.log(nayok);