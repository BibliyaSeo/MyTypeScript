// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30; // 추가할 수 있음

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Bibliya");

user1.greet("Hi there - I am");
console.log(user1);
