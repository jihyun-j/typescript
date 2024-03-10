// intersection type(교차유형)은 다른 유형을 결합하게 해줌
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
// Type Guards
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add("Max", "yes");
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    // 커스텀 타입 대신에 'in' 사용 (타입스크립트 빌트인)
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Name: " + emp.startDate);
    }
}
printEmployeeInformation(e1); // Name: Max, Name: create-server, Name: Sun Mar 10 2024 11:11:19 GMT+0900 (Korean Standard Time)
printEmployeeInformation({ name: "Jihyun", startDate: new Date() }); // Name: Jihyun Name: Sun Mar 10 2024 11:11:19 GMT+0900 (Korean Standard Time)
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo" + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // vehicle instanceof Truck
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    // instanseof는 instance에서는 작동하지 않음 (오직 type에서만 작동함)
    // if(animal instanseof Bird) => Error!
    //   if ("flyingSpeed" in animal) {
    //     console.log("Moving with speed" + animal.flyingSpeed);
    //   }
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
// Type Casting
var paragraph = document.querySelector("p"); // HTMLParagraphElement | null
var paragraph1 = document.getElementById("massage-output"); // HTMLElement | null
// const userInput = document.getElementById("user-input")!; // HTMLElement | null
// userInput.value = "Hi tere"; // !!Error!!
// 방법 1 또는 방법 2 둘 중 하나만 사용 -> 일관성 유지
// 느낌표를 사용 대신 if문 사용해 null 타입 확인
// 방법 1
var userInput1 = document.getElementById("user-input");
// 방법 2
var userInput2 = document.getElementById("user-input");
userInput2.value = "Hi tere";
var errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
