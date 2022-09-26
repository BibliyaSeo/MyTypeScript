function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}
// 값을 반환하지 않는 함수에는 void

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8, 8));
// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
