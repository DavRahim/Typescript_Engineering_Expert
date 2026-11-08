console.log("hello world");

const multiplyValue = (value1: number, value2?: number): number => {
  if (value1 && value2) {
    return value1 * value2;
  } else if (value2 === 0) {
    return 0;
  } else {
    return value1 * 2;
  }
};

// console.log(multiplyValue(10));
// console.log(multiplyValue(30));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));
// console.log(multiplyValue(0, 6));
// console.log(multiplyValue(0, 6));

type Tvalue = string | number | boolean;

const processInput = (value: Tvalue) => {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

type TLatLog = [number, number, string];

const formatCoordinate = (value: TLatLog) => {
  return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
};

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudent: number) => {
  const newCourse = courses.filter(
    (course: Course) => course.students >= minStudent && course.isPublished,
  );

  return newCourse;
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

// console.log(getPopularCourses(courses, 80));

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
  const getProperty = items.map((item: T) => item[key]);
  return getProperty;
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// console.log(pluckValues(users, "role"));
// console.log(pluckValues(users, "id"));

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `Manager Of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (age >= 18) {
        return res("Access Granted");
      } else {
        return rej(new Error("Access Denied: Must be 18 or older"));
      }
    }, 1000);
  });
};

console.log(await validateAgeAsync(20));
console.log(await validateAgeAsync(15));
