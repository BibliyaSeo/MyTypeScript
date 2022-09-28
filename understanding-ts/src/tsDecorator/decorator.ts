function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Logging - person")

@WithTemplate("<h1></h1>", "app")
class Person {
  name = "Max";
  age = 20;

  constructor() {
    console.log("Createing person object");
  }
}

const pers = new Person();

console.log(pers);
