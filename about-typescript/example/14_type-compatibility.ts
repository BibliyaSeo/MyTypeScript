// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }

class Person {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person;

// 왼쪽에 있는 게 더 크다면 할당 될 수가 없음
// developer = person; // X
// person = developer; // O
developer = new Person(); // X

// function
var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};

// sum이라는 함수가 add가 더 크다
// add = sum; //X
sum = add;

// 제네릭
interface Empty<T> {
  // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
// 아무것도 들지 않아서 가능

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;
// type이 달라서 호환이 되지 않음
