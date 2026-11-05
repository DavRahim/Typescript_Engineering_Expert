// *Basic typeScript;

const fullName: string = "Abul Kalam Azad";
const age: number = 70;
const isActive: boolean = true;
const bigInt: bigint = 299n;
const symbolSmile: symbol = Symbol();

// * type Safe function
const sumTwo = (a: number, b: number): number => {
  return a + b;
};
console.log(sumTwo(3, 4));

// * Generic Type

const numArr2: Array<number> = [1, 234, 45, 56, 6];
const numArr3: Array<string> = ["1", "234", "45", "56"];

//* General Type
const numArr4: number[] = [1, 234, 45, 56, 6];
const numArr5: string[] = ["1", "234", "45", "56"];

// * tuple and Readonly modifier
const DhakaLongLat: readonly [number, number] = [2123.45, 4673.6];
console.log(DhakaLongLat);

//* Optional, Default and
const contractName = (name: string, lastName?: string) => {
  return name + "" + lastName;
};
console.log(contractName("Kalam"));

const greetingHello = (name: string, seyHello = "Greeting") => {
  return name + " " + seyHello;
};
console.log(greetingHello("Kamal"));

// * rest parameters (...args);

const numberSum = (...number: number[]) => {
  return number;
};
console.log(numberSum(43, 34, 43, 34));

const personFun = (
  ...person: [name: string, age: number, isActive: boolean]
) => {
  const [name, age, isActive] = person;

  return name + " " + age;
};

console.log(personFun("salam", 40, true));

// * Object type, Alias, interface;
const personObj: {
  name: string;
  age: number;
  isActive: boolean;
} = {
  name: "Dulal vai",
  age: 50,
  isActive: true,
};

// Object type;
type personObject = {
  name: string;
  age: number;
  isMarred: boolean;
};

const person2: personObject = {
  age: 40,
  isMarred: true,
  name: "Abdul Jobber",
};

// interface;

interface logUser {
  name: string;
  email: string;
  lastName: string;
  isLogin: boolean;
}

const inLoginUser: logUser = {
  email: "salam@gmail.com",
  isLogin: true,
  lastName: "Abdul",
  name: "salam",
};
