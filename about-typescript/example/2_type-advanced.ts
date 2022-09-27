// 숫자형 이넘(Enum)
enum Shoes {
  Nike,
  Adidas,
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자형 이넘(Enum)
enum ShoesBrand {
  Nike = "나이키",
  Adidas = "아디다스",
}

console.log(ShoesBrand.Nike); // '나이키'

// 이넘(Enum)
enum Avengers {
  Capt,
  Ironman,
  Hulk,
}
const myHero = Avengers.Capt;

// any
let a: any = "hi";
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion)
let str = "이건 문자열 타입이 됩니다.";

let num: number;
num = "str" as any;

const divElement = document.querySelector("#app");
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다!");
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}
