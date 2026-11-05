//* Encapsulation: protect a state and change it through methods.
//* Access Modifier

//? public
//? private
//? protected
//? readonly

class Employee2 {
  constructor(
    public name: string,
    private _baseSalary: number,
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
}

const employee53 = new Employee2("Mohammad Abur", 5000);

// employee53.baseSalary = 500;
employee53.baseSalary = 500;
console.log(employee53.salaryWithBonus);
