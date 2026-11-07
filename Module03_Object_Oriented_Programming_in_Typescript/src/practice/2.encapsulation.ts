// * Encapsulation: Protect a state and change it through methods.
// * Access Modifier;

//? Public;
//? private;
//? protected;
//? readonly;

// class
class Employee2 {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

class Project {
  constructor(
    readonly name: string,
    public address: string,
    protected street: string,
    private marketValue: number,
  ) {}
  get marketValueMeth(): number {
    return this.marketValue;
  }
}

const projectDetails = new Project(
  "Green Trade Point",
  "mohakhali",
  "Ak Khandar Road",
  500,
);

console.log(projectDetails);
