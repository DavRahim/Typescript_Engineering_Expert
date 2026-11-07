// Typescript

interface Employee {
  name: string;
  baseSalary: number;
}

// Object
const employee: Employee = {
  name: "Mohammad",
  baseSalary: 34000,
};

const employee2: Employee = {
  name: "Abul Kalam Azad",
  baseSalary: 35000,
};

// class ;
class Employee3 {
  name: string = "Mohammad Salam";
  baseSalary: number = 5000;
}

class Employee4 {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee5 = new Employee3();
const employee6 = new Employee4("Sattar", 4000);

class Person {
  name: string;
  subject: string;
  constructor(name: string, subject: string) {
    this.name = name;
    this.subject = subject;
  }
}

const person2 = new Person("subject", "Sceince");

class Car {
  brand: string;
  price: number;
  model: string;

  constructor(brand: string, price: number, model: string) {
    ((this.brand = brand), (this.price = price), (this.model = model));
  }
}

const car = new Car("Bothis", 4000, "x-tring");
const car2 = new Car("String", 400, "ritght");
