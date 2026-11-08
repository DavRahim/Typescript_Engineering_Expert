// * Inheritance: A manager in an employee with an additional responsibility
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
    //   salaryWithBonus(bonus: number) {
    //     this._baseSalary += bonus;
    //   }S
    set salaryWithBonus(bonus) {
        this._baseSalary += bonus;
    }
    describe() {
        return `${this.name} erns ${this.baseSalary}`;
    }
}
const employee1 = new Employee("Abdur Rofique", 4000);
employee1.salaryWithBonus = 400;
console.log(employee1.describe());
class Manager extends Employee {
    teamMember;
    constructor(name, _baseSalary, teamMember) {
        super(name, _baseSalary);
        this.teamMember = teamMember;
    }
    get managerSalary() {
        return this.baseSalary;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMember}`;
    }
    describeManager() {
        return `${this.name} salary ${this._baseSalary}`;
    }
}
const manager1 = new Manager("Sattar Ali", 60000, 70);
console.log(manager1.describe());
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(` ${this.name} is having meal.`);
    }
}
// Student ক্লাস Person কে ইনহেরিট করছে
class Student extends Person {
    studentId;
    constructor(name, age, studentId) {
        super(name, age); // super() দিয়ে প্যারেন্ট ক্লাসের ডেটা ইনিশিয়ালাইজ করা হলো
        this.studentId = studentId;
    }
    study() {
        console.log(` ${this.name} is building awesome apps with TypeScript! `);
    }
}
const student1 = new Student("Abul Kalam", 22, 101);
console.log(student1.eat());
console.log(student1.study());
class Car {
    name;
    brand;
    price;
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    vehicleDescribe() {
        return `${this.name} price is ${this.price}`;
    }
}
class Honda extends Car {
    constructor(name, brand, price) {
        super(name, brand, price);
    }
}
const honda = new Honda("Tvs", "bajaj", 89000);
const car = new Car("Toyota", "X-colora", 9000);
console.log(honda.vehicleDescribe());
console.log(car.vehicleDescribe());
export {};
