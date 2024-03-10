// interface는 물체의 구조 설명, 타입스크립트에서만 존재
// 객체의 구조를 정의하고 타입을 정의
// interface가 type보다 더 명확하게 정의 가능

// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + this.name);
//   },
// };

// user1.greet("Hi there");

interface Named {
  readonly name: string;
}

// Class //
interface Greetable extends Named {
  // 여기에만 readonly를 정해 놓아도 Person class에서도 적용 됨
  readonly name: string;

  greet(phrase: string): void;
}

// interface는 다중 상속이 가능
class Person implements Greetable, Named {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

let user1: Greetable;
user1 = new Person("Max");
console.log(user1);

// 함수 유형의 interface
interface Addfn {
  (a: number, b: number): number;
}

let add: Addfn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
