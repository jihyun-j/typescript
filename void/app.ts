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
