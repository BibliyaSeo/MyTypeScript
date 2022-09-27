// 타입 추론 기본 1
let a = "a";

function logA(a = "a") {
  let b = 10;
  return a + b;
} // a10

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}
const items: Dropdown<string> = {
  value: "value",
  title: "a",
};

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
const detailItems: DetailedDropdown<number> = {
  value: 200,
  title: "a",
  description: "b",
  tag: 10,
};

// Best Common Type
const arr = [1, 2, true, true, "a"];
