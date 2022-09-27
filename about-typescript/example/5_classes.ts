// ES5
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const hulk = new Person('Banner', 33);

// ES6 + 타입스크립트
class Person {
  public name: string;
  private age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const capt = new Person("Steve", 100);
console.log(capt);
