// interface는 물체의 구조 설명, 타입스크립트에서만 존재
// 객체의 구조를 정의하고 타입을 정의
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + this.name);
  },
};

user1.greet("Hi there");
