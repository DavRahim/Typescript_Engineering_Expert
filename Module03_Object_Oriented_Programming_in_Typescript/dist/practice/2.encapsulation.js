// * Encapsulation: Protect a state and change it through methods.
// * Access Modifier;
//? Public;
//? private;
//? protected;
//? readonly;
// class
class Employee2 {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
class Project {
    name;
    address;
    street;
    marketValue;
    constructor(name, address, street, marketValue) {
        this.name = name;
        this.address = address;
        this.street = street;
        this.marketValue = marketValue;
    }
    get marketValueMeth() {
        return this.marketValue;
    }
}
const projectDetails = new Project("Green Trade Point", "mohakhali", "Ak Khandar Road", 500);
console.log(projectDetails);
export {};
