//Todo: Basic types
let myString: string = "Programming Hero";
let myNumber: number = 30494;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 100n;

//todo Type safe function
const addTwo = (a: number, b: number): number => {
  return a + b;
};
console.log(addTwo(3, 60));

// implicitly
// automatic type pawa ke inplicity bole
// let myString = "Programming Hero";

// Explicitly
// let myString: string = "Programming Hero";

//TODO:  Array and Tuple an readonly modifier;
// const arr: Array<string> = ["Programming", "Hero"]; //Generic
// const numArr: Array<number> = [12, 3, 4, 5];
const arr: string[] = ["Programming", "Hero"];
const numArr: number[] = [12, 3, 4, 5];

//todo Tuple
const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];
console.log(dhakaLatLong);

// TODO: optional, Default and rest parameters (...args);

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + "" + lastName;
};

console.log(concatName("dsa"));
console.log(concatName("dsa", "dsf"));

const greetings = (fullName: string, greeting = "Hello"): void => {
  console.log(greeting + "" + fullName);
};

greetings("Mir");

// TODO: rest parameters (...args);
const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 22, 3, 3, 34, 4, 54, 5);

const LogUserAction = (
  ...args: [name: string, age: number, isActive: boolean]
) => {
  const [name, age] = args;
  console.log(name + " ", +age);
};

LogUserAction("Mir", 50, false);

// TODO: Object type, type alias and interface

//type Alias
type TUser = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];

  address: Address;
};

type Address = {
  streetName: string;
  holdingNumber: number;
};

const user: TUser = {
  name: "mir",
  age: 123,
  isActive: true,
  action: () => console.log("Hello"),
  badges: ["abc", "bng"],
  address: {
    holdingNumber: 4,
    streetName: "sf dsf",
  },
};

console.log(user);

//interface
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}

const user2: IUser = {
  name: "mir",
  age: 123,
  isActive: true,
  action: () => console.log("Hello"),
  badges: ["abc", "bng"],
};

type Username = string;

// interface IUsername string   // not work
