class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  talk() {
    console.log("Talking");
  }
  walk() {
    console.log("walking");
  }
}

// student : attedClass
// teacher: checking

class Student extends Person {
  attedClass() {
    console.log("attedding class");
    this.walk();
    this.talk();
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
  checking() {
    console.log("Checking assigmnet ");
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

const student = new Student("Ruhan", "Rouf");
const teacher = new Teacher("Babul", "Roy");
const principal = new Principal("Mirza", "Azam");

const printNames = (people: Person[]) => {
  for (let person of people) console.log(person.fullName);
};

printNames([student, teacher, principal]);
