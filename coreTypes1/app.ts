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

const result1 = add1(number3, number4);
console.log(result);
