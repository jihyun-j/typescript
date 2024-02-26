// 1. object type: key-type pairs
// 'object'라고 명시하는 것보다 {key: type}으로 정확하게 명시하는 것이 좋다

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favActivities: string[]; // Array of Strings

// favActivities = "Sports"; // 하나의 string을 입력하면 에러발생
// favActivities = ["Sports", 1]; // 문자와 숫자를 동시에 입력하는 혼합된 배열 또한 에러발생
// 위 두가지의 에러를 방지하기 위해서는 any[]를 사용하는데 그리 좋은 방법은 아님

console.log(person.name);
