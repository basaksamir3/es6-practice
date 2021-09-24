const numbers1 = [15,19,12,15,18,21,20,17,16];
const numbers2 = [22,25,26,24,28,29,27];
const numbers3 = [29,22,21,27,28,30];
const total = numbers1.concat(numbers2).concat(5).concat(numbers3);
console.log(total);

//... dot use array add
const num1 = [35,19,12,15,18,21,20,17,16];
const num2 = [00,25,26,24,28,29,27];
const num3 = [30,22,21,27,28,30];
const totalNum = [...num1, ...num2, ...num3];
console.log(totalNum);


const sochib = 850;
const business = 670;
const minimster = 900;
const maximum = Math.max(sochib, business,minimster);
console.log(maximum);

// ... use maximum array value find
const takaPoisa = [500,980,1250,1220,780];
const max = Math.max(...takaPoisa);
console.log(max);