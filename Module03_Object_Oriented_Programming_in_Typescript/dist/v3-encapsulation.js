//* Encapsulation: protect a state and change it through methods.
//* Access Modifier
//? public
//? private
//? protected
//? readonly
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
}
const employee53 = new Employee2("Mohammad Abur", 5000);
// employee53.baseSalary = 500;
employee53.baseSalary = 500;
console.log(employee53.salaryWithBonus);
export {};
