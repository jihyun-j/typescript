var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    // 'describe' 메소드 추가
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe(); // Deparment: Accounting -> accounting 변수 값 참조
// describe 매개변수가 없는 경우
// const accountingCopy = { describe: accounting.describe }; // 특정 객체를 참조한 것이 아니라 object literal임
// accountingCopy.describe(); // Deparment: undefined -> 올바르게 작동은 하고있지만 내가 정의한 객체를 참조하지 않았기 때문에 undefined 결과값이 나옴
// describe 매개변수가 있는 경우
var accountingCopy = { name: "Dummy", describe: accounting.describe };
accountingCopy.describe(); // Department: Dummy -> Department Class의 describe에 매개변수를 설정해 놓은 경우 Class안에 접근하여 name에 접근 가능
