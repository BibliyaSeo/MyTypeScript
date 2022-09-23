enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
//     hobbies: string[];
// } = {
const person = {
  name: "Seongkyeong",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
