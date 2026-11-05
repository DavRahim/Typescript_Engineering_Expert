//* Polymorphism: different employees respond differently to the same method call.
class Employee2 {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary <= 0) {
            throw new Error("Salary can't be a zero");
        }
        this._baseSalary = newSalary;
    }
    CalculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}
class Manager extends Employee2 {
    CalculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee2 {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    CalculatePay(taxRate) {
        return this.baseSalary + 3000 - this.baseSalary * taxRate;
    }
}
const employee = new Employee2("Mohamamd", 5000);
const manager = new Manager("Mizan", 5000);
const developer = new Developer("Shakil", 5000, "developer");
console.log(employee.CalculatePay(0.1));
console.log(manager.CalculatePay());
console.log(developer.CalculatePay(0.1));
export {};
