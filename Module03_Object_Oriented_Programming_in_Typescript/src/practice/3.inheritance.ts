// * Inheritance: A manager in an employee with an additional responsibility

class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  //   salaryWithBonus(bonus: number) {
  //     this._baseSalary += bonus;
  //   }S
  set salaryWithBonus(bonus: number) {
    this._baseSalary += bonus;
  }

  describe(): string {
    return `${this.name} erns ${this.baseSalary}`;
  }
}

const employee1 = new Employee("Abdur Rofique", 4000);

employee1.salaryWithBonus = 400;

console.log(employee1.describe());

class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public teamMember: number,
  ) {
    super(name, _baseSalary);
  }

  get managerSalary(): number {
    return this.baseSalary;
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMember}`;
  }

  describeManager(): string {
    return `${this.name} salary ${this._baseSalary}`;
  }
}

const manager1 = new Manager("Sattar Ali", 60000, 70);

console.log(manager1.describe());

class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}

  eat(): void {
    console.log(` ${this.name} is having meal.`);
  }
}

// Student ক্লাস Person কে ইনহেরিট করছে

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public studentId: number,
  ) {
    super(name, age); // super() দিয়ে প্যারেন্ট ক্লাসের ডেটা ইনিশিয়ালাইজ করা হলো
  }

  study(): void {
    console.log(` ${this.name} is building awesome apps with TypeScript! `);
  }
}

const student1 = new Student("Abul Kalam", 22, 101);

console.log(student1.eat());
console.log(student1.study());

class Car {
  constructor(
    public name: string,
    public brand: string,
    private price: number,
  ) {}

  vehicleDescribe(): string {
    return `${this.name} price is ${this.price}`;
  }
}

class Honda extends Car {
  constructor(name: string, brand: string, price: number) {
    super(name, brand, price);
  }
}

const honda = new Honda("Tvs", "bajaj", 89000);
const car = new Car("Toyota", "X-colora", 9000);

console.log(honda.vehicleDescribe());
console.log(car.vehicleDescribe());
