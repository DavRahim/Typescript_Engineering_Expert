//* Abstraction: every employee must define how their pay is calculated.
class Employee {
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
export {};
