function logMessage1(value: string) {
  console.log(value);
}
function logMessage2(value: number) {
  console.log(value);
}
function logMessage3(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage4(value: string | number) {
  console.log(value);
}

function logMessage5(value: string | number) {
  if (typeof value === "string") {
    value.toLocaleUpperCase();
  }
  if (typeof value === "number") {
    value.toLocaleString();
  }
  throw new TypeError("value must be string or number");
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

//union - union type을 더 많이 씀
function askSomeone(someone: Developer | Person) {
  someone.name; // O
  // someone.age; // X
}

askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "캡틴", age: 100 });

// intersection
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

// askSomeone2({ name: "디벨로퍼", skill: "웹 개발" }); //X 다 합한 객체를 넘겨야 함
askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 20 });
