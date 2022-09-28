// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person2 implements Greetable {
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

user1 = new Person2("Bibliya");
// user1.name = 'Manu' readonly여서 error

user1.greet("Hi there - I am");
console.log(user1);
