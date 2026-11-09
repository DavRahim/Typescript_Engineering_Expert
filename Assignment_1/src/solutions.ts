// * Problem 1
// const multiplyValue = (value1: number, value2?: number): number => {
//   if (value1 && value2) {
//     return value1 * value2;
//   } else if (value2 === 0) {
//     return 0;
//   } else {
//     return value1 * 2;
//   }
// };

const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

// console.log(multiplyValue(10));
// console.log(multiplyValue(30));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));
// console.log(multiplyValue(0, 6));
// console.log(multiplyValue(0, 6));

// * Problem 2

// type Tvalue = string | number | boolean;

// const processInput = (value: Tvalue) => {
//   if (typeof value === "string") {
//     return value.toLowerCase().trim();
//   }

//   if (typeof value === "number") {
//     return value * 10;
//   }

//   if (typeof value === "boolean") {
//     if (value) {
//       return "Active";
//     } else {
//       return "Inactive";
//     }
//   }
// };

type InputValue = string | number | boolean;
type OutputValue = string | number;

const processInput = (value: InputValue): OutputValue => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
};

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

//* Problem 3

// type TLatLog = [number, number, string];

// const formatCoordinate = (value: TLatLog) => {
//   return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
// };

type Coordinate = readonly [number, number, string];

const formatCoordinate = (value: Coordinate): string => {
  const [latitude, longitude, locationName] = value;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

//* Problem 4

// const concatenateArrays = <T>(...arrays: T[][]): T[] => {
//   return arrays.flat();
// };

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};

// const concatenateArrays = <T>(...arrays: T[][]): T[] => {
//   return arrays.reduce<T[]>((acc, arr) => [...acc, ...arr], []);
// };

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// console.log(concatenateArrays([[1, 2], [3, 4], [5]]));

// * Problem 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

// console.log(getPopularCourses(courses, 80));

//* Problem 6

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// console.log(pluckValues(users, "role"));
// console.log(pluckValues(users, "id"));

//* Problem: 7

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
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

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());

//* Problem 8

// const delay = (ms: number): Promise<void> =>
//   new Promise((resolve) => setTimeout(resolve, ms));

// const validateAgeAsync = async (age: number): Promise<string> => {
//   if (age < 18) {
//     throw new Error("Access Denied: Must be 18 or older");
//   }

//   await delay(1000);
//   return "Access Granted";
// };

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};

console.log(await validateAgeAsync(18));
console.log(await validateAgeAsync(15));
