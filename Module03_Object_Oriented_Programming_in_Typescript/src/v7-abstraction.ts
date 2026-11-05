//* Abstraction: every employee must define how their pay is calculated.

abstract class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary <= 0) {
      throw new Error("Salary can't be a zero");
    }
    this._baseSalary = newSalary;
  }

  abstract calculatePay(): number;
  abstract getResources(): string[];
  abstract registerEntryTime(): string;
}

class Manager extends Employee {
  calculatePay() {
    return this.baseSalary + 5000;
  }
  getResources() {
    return ["typescript", "Javascript"];
  }
  registerEntryTime() {
    return " 10:20PM";
  }
}
class Developer extends Employee {
  calculatePay() {
    return this.baseSalary + 400;
  }
  getResources() {
    return ["typescript", "Javascript"];
  }
  registerEntryTime() {
    return " 10:20PM";
  }
}

const developer = new Developer("Kalal", 50000);
console.log(developer.getResources());
