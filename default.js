function add(num1, num2 = 0) {
    return  num1 + num2;
}
const total = add(15,19); // without default add
console.log(total);
const totals = add(15); // with default add
console.log(totals);