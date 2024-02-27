function add(n1: number, n2: number) {
  return n1 + n2;
}

// void type: function에 return문 존재하지 않아 아무것도 반환하지 않는 것
// void는 의도적으로 return문 없다는 것을 보여줌
function printResults(num: number): void {
  console.log(num);
}

// 만약 undefined로 지정한다면 값을 반환하지 않는 return문이 있다고 기대함.
function printResults2(num: number): undefined {
  console.log(num);
  return;
}

printResults(add(1, 5));
printResults2(add(1, 5));

// function type
// let combineValues: Function;
let combineValues: (a: number, b: number) => number; // 2개의 매개변수와 숫자반환

combineValues = add; // any type
// combineValues = printResults; // Function을 사용했을 때, 두개의 매개변수를 받아야하는에 에러가 발생하지 않음, undefined
console.log(combineValues(8, 8));

// callback function
function addAndHandle(n1: number, n2: number, cb: (name: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(19, 29, (result) => {
  console.log(result);
});
