//* part 1: Typescript Utility Types;

// 1. Partial<T> Make All Properties Optional
interface User {
  id: string;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>;

//2. Required <T> - Make All Properties Required;

interface Config {
  apiKey?: string;
  timeOut?: number;
}

type AppConfig = Required<Config>;
const app: AppConfig = {
  apiKey: "12345",
  timeOut: 345,
};

// 3. Pick<T,K> Select Specific Properties;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

//4. Omit<T,k> - Exclude Specific Properties;

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}
type PublicEmployee = Omit<Employee, "salary" | "nid">;

// 5. Record<K, V> - Create key - value Object Types;

type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
  development: "http://localhodt:3000",
  staging: "https://staging.api.com",
  production: "https://api.com",
};

// Quick Revision:
// Partial → সব Property Optional করে।
// Required → সব Property Required করে।
// Pick → নির্দিষ্ট Property নির্বাচন করে।
// Omit → নির্দিষ্ট Property বাদ দেয়।
// Record → Key-Value Object Type তৈরি করে।

//* Part 2: Object-Oriented Programming (OOP);

//6. Class & Object;

class Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {}

  getDetails() {
    return `${this.name} erns ${this.salary}`;
  }
}

const employee = new Employee("Mr. Jhon", 5007);

// 7. instanceof - Runtime Object Checking;

console.log(employee instanceof Employee);

// *Part 3: Four Pillars of OOP
// 1.Encapsulation
//  2.Inheritance
//  3.Polymorphism
//  4.Abstraction

// 8. Encapsulation - protect Internal Data ;

class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(6000);
console.log(account.getBalance());

// 9. Inheritance- Code Reusability;

class Employee1 {
  constructor(
    public name: string,
    protected salary: number,
  ) {}

  describe() {
    return `${this.name} erns ${this.salary}`;
  }
}

class Manager extends Employee1 {
  constructor(
    name: string,
    salary: number,
    public teamSize: number,
  ) {
    super(name, salary);
  }

  manageTeam() {
    return `${this.name} manages ${this.teamSize} people`;
  }
}

const employee1 = new Employee1("Salam In Habibi", 4000);
console.log(employee1.describe());

const manager = new Manager("Mohammad Rahim", 400000, 40);
console.log(manager.manageTeam());

// 10. Polymorphism- Many Forms
class Employee2 {
  constructor(public salary: number) {}

  calculatePay() {
    return this.salary;
  }
}

class Manager2 extends Employee2 {
  override calculatePay() {
    return this.salary + 5000;
  }
}

class Developer extends Employee2 {
  override calculatePay() {
    return this.salary + 30000;
  }
}

const employees: Employee2[] = [
  new Employee2(499),
  new Manager2(4500),
  new Developer(20030),
];

employees.forEach((employee) => console.log(employee.calculatePay()));

// 11. Abstraction- Hide Complexity;

abstract class Payment {
  abstract Pay(amount: number): void;
}

class CardPayment extends Payment {
  Pay(amount: number) {
    console.log(`Paid ${amount} using Card`);
  }
}

// 12. Getter & Setter;
class Employee4 {
  constructor(private _salary: number) {}

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error("Invalid salary");
    }

    this._salary = value;
  }
}

// 13. Composition
class Engine {
  start() {
    return "Engine started";
  }
}

class Car {
  constructor(private engine: Engine) {}

  startCar() {
    return this.engine.start();
  }
}

// 14. Static Members
class MathHelper {
  static square(number: number) {
    return number * number;
  }
}

console.log(MathHelper.square(5));

// 15. Dependency Injection

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

class UserService {
  constructor(private logger: Logger) {}

  createUser() {
    this.logger.log("User created");
  }
}
