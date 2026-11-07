//* Abstraction: every employee must define how their pay is calculated.

abstract class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  set baseSalary(newSalary: number) {
    if (newSalary <= 0) {
      new Error("Salary can't be a zero");
    }

    this._baseSalary = newSalary;
  }

  abstract calculatePay(): number;
  abstract getResources(): string[];
  abstract registerEntryTime(): string;
}

class Manager extends Employee {
  calculatePay() {
    return this._baseSalary + 5000;
  }
  getResources() {
    return ["typescript", "Javascript"];
  }
  registerEntryTime() {
    return "09:50AM";
  }
}

class Developer extends Employee {
  calculatePay() {
    return this._baseSalary + 60000;
  }
  getResources() {
    return ["typescript", "Javascript"];
  }
  registerEntryTime() {
    return "09:50AM";
  }
}
const developer = new Developer("Kalal", 50000);
console.log(developer.calculatePay());

abstract class Vehicle {
  abstract startEngine(): void;

  move(): void {
    console.log("Vehicle is moving smoothy on the highway...");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started with a push-button start system");
  }
}

const myCar = new Car();

console.log(myCar.startEngine());
console.log(myCar.move());
