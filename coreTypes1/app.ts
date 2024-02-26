function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// 아래의 상수에 타입을 지정하지 않음
// 이유는 타입스크립에서 '타입 추론(Type Inference)'기능을 가지고 있기 때문
// 하지만 변수에 아무것도 할당되지 않았을 때는 타입을 지정해야함 ex) let num: number;

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
