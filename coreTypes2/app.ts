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

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase()); // 배열에서 hobby라는 하나의 원소가 string type이기 때문에 가능
  console.log(hobby.map()); // string type에서는 사용할 수 없는 method
}
