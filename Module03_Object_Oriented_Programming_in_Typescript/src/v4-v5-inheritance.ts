//* Inheritance: a Manager is an Employee with an additional responsibility.

class Employee2 {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary <= 0) {
      throw new Error("Salary can't be a zero");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} erns ${this.baseSalary}`;
  }
}

class Manager extends Employee2 {
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }
  describeManager(): string {
    return `${this.name} manages ${this._baseSalary} people`;
  }
}

const employee53 = new Employee2("Mohammad Abur", 5000);

// employee53.baseSalary = 500;
employee53.baseSalary = 500;
console.log(employee53.describe());

const manager = new Manager("Mohammad manager", 5000, 40);
console.log(manager.describe(), "sdf");
console.log(manager.describeWork(), "sdf");
