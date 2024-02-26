// 1. 가장 기본적인 자바스크립트 형식의 function
function add(n1, n2) {
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// 2. 타입 추가
function add1(n1: number, n2: number) {
  return n1 + n2;
}

const number3 = "5";
const number4 = 2.8;

const result1 = add1(number3, number4); // number가 아닌 다른 타입을 넣으면 에러발생 (개발중에 에러발견 가능)
console.log(result1);

// 3. 자바스크립트에서 타입 지정
function add3(n1: number, n2: number) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    throw new Error("Incorrect input");
  }
  return n1 + n2;
}

const number5 = "5";
const number6 = 2.8;

const result2 = add1(number5, number6);
console.log(result2);
