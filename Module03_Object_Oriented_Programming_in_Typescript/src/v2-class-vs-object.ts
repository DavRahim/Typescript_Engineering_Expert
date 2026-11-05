// typescript

interface Employee {
  name: string;
  baseSalary: number;
}

// Object
const employee: Employee = {
  name: "mohammad",
  baseSalary: 23000,
};

const employee2: Employee = {
  name: "Mizan",
  baseSalary: 34000,
};

// class
class Employee {
  name: string = "Mohammad";
  baseSalary: number = 33300;
}
// class
class Employee2 {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee4 = new Employee();
const employee5 = new Employee();
const employee53 = new Employee2("Mohammad Abur", 5000);
