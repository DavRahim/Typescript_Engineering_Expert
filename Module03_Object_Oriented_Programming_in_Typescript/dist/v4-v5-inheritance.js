//* Inheritance: a Manager is an Employee with an additional responsibility.
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
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary <= 0) {
            throw new Error("Salary can't be a zero");
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} erns ${this.baseSalary}`;
    }
}
class Manager extends Employee2 {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} manages ${this._baseSalary} people`;
    }
}
const employee53 = new Employee2("Mohammad Abur", 5000);
// employee53.baseSalary = 500;
employee53.baseSalary = 500;
console.log(employee53.describe());
const manager = new Manager("Mohammad manager", 5000, 40);
console.log(manager.describe(), "sdf");
console.log(manager.describeWork(), "sdf");
export {};
