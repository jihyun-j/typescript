// 1. object type: key-type pairs
// 'object'라고 명시하는 것보다 {key: type}으로 정확하게 명시하는 것이 좋다
// 2. tuple type: 고정된 길이와 유형을 가진 배열
// 3. enum type:

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]

// } = {
// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], // tuple type
// };

// Array Type
let favActivities: string[]; // Array of Strings

// favActivities = "Sports"; // 하나의 string을 입력하면 에러발생
// favActivities = ["Sports", 1]; // 문자와 숫자를 동시에 입력하는 혼합된 배열 또한 에러발생
// 위 두가지의 에러를 방지하기 위해서는 any[]를 사용하는데 그리 좋은 방법은 아님

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toLocaleUpperCase()); // 배열에서 hobby라는 하나의 원소가 string type이기 때문에 가능
//   // console.log(hobby.map()); // string type에서는 사용할 수 없는 method
// }

// Tuple Type: 배열의 정확한 길이와 타입을 알고 있다면 Array 보다는 Tuple을 사용하는 것이 좋다. (명확하고 엄격한 관리)
// person.role.push("admin"); // 예외. 타입스크립에서 이 에러를 잡을 수는 없지만 잘못된 value를 할당하지는 않음
// person.role[1] = 10; // Error
// person.role = [0, "admin", "user"]; // Error

// Enum Type

// const ADMIN = 0;
// const READ_ONLY = 1;
// const USER = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
} // 소문자로 입력해도 무방

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  // role: 'READ ONLY USER'
  // role: USER,
  role: Role.AUTHOR,
};
