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
