//* Polymorphism: different employees respond differently to the same method call.

class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  calculatePay(taxRate: number): number {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

class Manager extends Employee {
  override calculatePay(): number {
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }

  calculatePay(taxRate: number): number {
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
  makeSound(): void {
    console.log("Animal Makes a Sounds...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof, Woof........");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Mew, mew......");
  }
}

function printAnimalSound(animal: Animal) {
  animal.makeSound();
  return "Fun End";
}

console.log(printAnimalSound(new Dog()));
console.log(printAnimalSound(new Cat()));
