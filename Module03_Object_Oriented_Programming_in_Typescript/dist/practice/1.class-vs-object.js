// Typescript
// Object
const employee = {
    name: "Mohammad",
    baseSalary: 34000,
};
const employee2 = {
    name: "Abul Kalam Azad",
    baseSalary: 35000,
};
// class ;
class Employee3 {
    name = "Mohammad Salam";
    baseSalary = 5000;
}
class Employee4 {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee5 = new Employee3();
const employee6 = new Employee4("Sattar", 4000);
class Person {
    name;
    subject;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
const person2 = new Person("subject", "Sceince");
class Car {
    brand;
    price;
    model;
    constructor(brand, price, model) {
        ((this.brand = brand), (this.price = price), (this.model = model));
    }
}
const car = new Car("Bothis", 4000, "x-tring");
const car2 = new Car("String", 400, "ritght");
export {};
