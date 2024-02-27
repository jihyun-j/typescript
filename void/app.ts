function add(n1: number, n2: number) {
  return n1 + n2;
}

// void type: function에 return문 존재하지 않아 아무것도 반환하지 않는 것
function printResults(num: number): void {
  console.log(num);
}

printResults(add(1, 5));
