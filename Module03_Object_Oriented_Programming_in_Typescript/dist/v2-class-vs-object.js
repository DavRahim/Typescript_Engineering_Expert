// typescript
// Object
const employee = {
    name: "mohammad",
    baseSalary: 23000,
};
const employee2 = {
    name: "Mizan",
    baseSalary: 34000,
};
// class
class Employee {
    name = "Mohammad";
    baseSalary = 33300;
}
// class
class Employee2 {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee4 = new Employee();
const employee5 = new Employee();
const employee53 = new Employee2("Mohammad Abur", 5000);
export {};
