// interface는 물체의 구조 설명, 타입스크립트에서만 존재
// 객체의 구조를 정의하고 타입을 정의
// interface가 type보다 더 명확하게 정의 가능
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Max");
console.log(user1);
