//* Abstraction: every employee must define how their pay is calculated.
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary <= 0) {
            new Error("Salary can't be a zero");
        }
        this._baseSalary = newSalary;
    }
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
class Vehicle {
    move() {
        console.log("Vehicle is moving smoothy on the highway...");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("Car engine started with a push-button start system");
    }
}
const myCar = new Car();
console.log(myCar.startEngine());
console.log(myCar.move());
export {};
