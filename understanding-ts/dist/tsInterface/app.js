"use strict";
// interface Person {
//   name: string;
//   age: number;
class Person {
    constructor(n) {
        this.age = 30; // 추가할 수 있음
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Bibliya");
user1.greet("Hi there - I am");
console.log(user1);
