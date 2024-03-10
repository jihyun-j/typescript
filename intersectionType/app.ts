// intersection type(교차유형)은 다른 유형을 결합하게 해줌

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Type Guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
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

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // vehicle instanceof Truck
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
interface Bird {
  type: "bird"; // 리터럴 타입
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // 리터럴 타입
  runningSpeed: number;
}

type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  // instanseof는 instance에서는 작동하지 않음 (오직 type에서만 작동함)
  // if(animal instanseof Bird) => Error!
  //   if ("flyingSpeed" in animal) {
  //     console.log("Moving with speed" + animal.flyingSpeed);
  //   }

  let speed;
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
const paragraph = document.querySelector("p"); // HTMLParagraphElement | null
const paragraph1 = document.getElementById("massage-output"); // HTMLElement | null

// const userInput = document.getElementById("user-input")!; // HTMLElement | null
// userInput.value = "Hi tere"; // !!Error!!

// 방법 1 또는 방법 2 둘 중 하나만 사용 -> 일관성 유지
// 느낌표를 사용 대신 if문 사용해 null 타입 확인
// 방법 1
const userInput1 = <HTMLInputElement>document.getElementById("user-input")!;

// 방법 2
const userInput2 = document.getElementById("user-input")! as HTMLInputElement;
userInput2.value = "Hi tere";
