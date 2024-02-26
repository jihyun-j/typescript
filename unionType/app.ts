// 1. Union Type으로 한 매개변수에 다양한 타입을 입력할 수 있다.
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine("Max", "Anne");
console.log(combineNames);
