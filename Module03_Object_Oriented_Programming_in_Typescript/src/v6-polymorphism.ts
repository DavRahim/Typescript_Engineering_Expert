//* Polymorphism: different employees respond differently to the same method call.

class Employee2 {
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

  CalculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

class Manager extends Employee2 {
  override CalculatePay() {
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee2 {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }
  CalculatePay(taxRate: number) {
    return this.baseSalary + 3000 - this.baseSalary * taxRate;
  }
}

const employee = new Employee2("Mohamamd", 5000);
const manager = new Manager("Mizan", 5000);
const developer = new Developer("Shakil", 5000, "developer");

console.log(employee.CalculatePay(0.1));
console.log(manager.CalculatePay());
console.log(developer.CalculatePay(0.1));
