// * Top types

let hlwWl: any = "hello world";
hlwWl = 123;
hlwWl.length;

const something: unknown = "Hello World";
// something.length

// *Core types
let something2: unknown;
const num: number = 123;
const name: string = "mohammad";

something2 = name;

//* Nullish types
interface User {
  name: string;
}

type LoggedInUser = User | null;

const currentUser: LoggedInUser = null;

//* Unit types
const greet = () => {
  console.log("Hello World");
};
greet();

//* Sub-type of unit type

const anotherGreet = (): undefined => {
  console.log("Hello World");
  return undefined;
};
const greetings = anotherGreet();
console.log(greetings);

//* Bottom type
//! let neverHapping : never = "mohammad"
const getError = (msg: string): never => {
  throw new Error(msg);
};
//! const x: string = getError("error is this code");
