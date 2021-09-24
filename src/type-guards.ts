type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknowEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknowEmployee) {
  console.log("Name: ", emp.name);
  if ("privileges" in emp) console.log("Privileges: ", emp.privileges);
  if ("startDate" in emp) console.log("Start Date: ", emp.startDate);
}

const a2: ElevatedEmployee = {
  name: "Prae",
  privileges: ["12345"],
  startDate: new Date(),
};

// printEmployeeInformation(a2);
// printEmployeeInformation({ name: "Photy", startDate: new Date() });

//------------------ combine with "class" ------------------//

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo...", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ("loadCargo" in vehicle) vehicle.loadCargo(1000);
  if (vehicle instanceof Truck) vehicle.loadCargo(1000); //instanceof can check type of class
}

// useVehicle(v1);
// useVehicle(v2);

//--------------------- combine custom type ---------------------//
type ElevatedEmployee = Admin & Employee;

const a1: ElevatedEmployee = {
  name: "Prae",
  privileges: ["12345"],
  startDate: new Date(),
};

// console.log("a1 : ", a1);

type Combinable = string | number;
type Numberic = number | boolean;

//------------------ combine by "&" will get same value of type ------------------//
type Universal1 = Combinable & Numberic; // Universal = number

//------------------ combine by "&" will get same value of type ------------------//
type Universal2 = Combinable | Numberic; // Universal = string | number | boolean

//-------------------------- combine interface -------------------------//
interface Admin2 {
  name: string;
  privileges: string[];
}

interface Employee2 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee2 extends Admin, Employee {}
