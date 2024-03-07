var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string
        // private name: string;
        // protected는 private과 비슷하지만 다른점이 class 내부에서도 사용할 수 있지만 class 확장하는 모든 클래스에서도 사용 가능하다
        this.employees = []; // readonly는 타입스크립에서만 존재하면 한번 정의하면 수정할 수 없다.(extra safe)
        // this.name = name;
    }
    // 'describe' 메소드 추가
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
// Inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        // 부모 class인 department의 propeties
        // this를 호출하기 전에 super는 무조건 먼저 있어야 함
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var it = new ITDepartment("id", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
console.log(it);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a vaild value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    // overriding properties
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        // lastReport는 private이기 때문에 매서드 안에서 접근은 할 수 있지만 닷표기법으로 액세스할 수없다
        // 해결방법은 getter 사용
        this.lastReport = text;
    };
    AccountingDepartment.prototype.getReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// getter
console.log(accounting.mostRecentReport);
// setter
accounting.mostRecentReport = "Year End Report";
// const accounting = new Department("ss", "Accounting");
// accounting.describe(); // Deparment: Accounting -> accounting 변수 값 참조
// describe 매개변수가 없는 경우
// const accountingCopy = { describe: accounting.describe }; // 특정 객체를 참조한 것이 아니라 object literal임
// accountingCopy.describe(); // Deparment: undefined -> 올바르게 작동은 하고있지만 내가 정의한 객체를 참조하지 않았기 때문에 undefined 결과값이 나옴
// describe 매개변수가 있는 경우
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe(); // Department: Dummy -> Department Class의 describe에 매개변수를 설정해 놓은 경우 Class안에 접근하여 name에 접근 가능
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// private을 설정해 놓으면 더이상 이러한 방식으로 접근할 수 없다. 오직 Class안에서만 접근할 수 있다.
// Class외부에서 접근하기 위해서는 public으로 적용해야하는데 이것은 이미 기본값으로 설정되어있다.
// accounting.employees[2] = "Anna";
// accounting.describe();
// accounting.printEmployeeInformation();
