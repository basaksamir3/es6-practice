// this is function 

function doubleIt(number){
    return number * 2;
}
const result = doubleIt(8);
console.log(result);

// this is function  declration

const doublesIt = function(number){
    return number * 2
}
const result2 = doublesIt(9);
console.log(result2);

// this is function declration with arrow function
//  three way declration
// single parameter
const add = num => num + 1;
const addResult = add(9);
console.log(addResult);

// multiple parameter
const addNum  = (num1, num2) => num1 + num2;
const addResults = addNum(9,11);
console.log(addResults);

// multiple parameter with multiple work
const doMath = (x,y) =>{
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    return result;
}
const showResult = doMath(5,9);
console.log(showResult);