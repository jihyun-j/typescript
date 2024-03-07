class Department {
  name: string;
  private readonly employees: string[] = []; // readonly는 타입스크립에서만 존재하면 한번 정의하면 수정할 수 없다.(extra safe)

  constructor(n: string) {
    this.name = n;
  }

  // 'describe' 메소드 추가
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe(); // Deparment: Accounting -> accounting 변수 값 참조

// describe 매개변수가 없는 경우
// const accountingCopy = { describe: accounting.describe }; // 특정 객체를 참조한 것이 아니라 object literal임
// accountingCopy.describe(); // Deparment: undefined -> 올바르게 작동은 하고있지만 내가 정의한 객체를 참조하지 않았기 때문에 undefined 결과값이 나옴

// describe 매개변수가 있는 경우
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe(); // Department: Dummy -> Department Class의 describe에 매개변수를 설정해 놓은 경우 Class안에 접근하여 name에 접근 가능

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// private을 설정해 놓으면 더이상 이러한 방식으로 접근할 수 없다. 오직 Class안에서만 접근할 수 있다.
// Class외부에서 접근하기 위해서는 public으로 적용해야하는데 이것은 이미 기본값으로 설정되어있다.
// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();
