//* Polymorphism: different employees respond differently to the same method call.
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
    calculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    calculatePay(taxRate) {
        return this.baseSalary + 40000 - this.baseSalary * taxRate;
    }
}
const employee = new Employee("karim", 5000);
const manager = new Manager("Rahim", 40000);
const developer = new Developer("Mohammad", 70000, "Developer");
console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.2));
class Animal {
    makeSound() {
        console.log("Animal Makes a Sounds...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof, Woof........");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Mew, mew......");
    }
}
function printAnimalSound(animal) {
    animal.makeSound();
    return "Fun End";
}
console.log(printAnimalSound(new Dog()));
console.log(printAnimalSound(new Cat()));
export {};
