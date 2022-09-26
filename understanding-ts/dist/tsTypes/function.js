"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
// 값을 반환하지 않는 함수에는 void
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
