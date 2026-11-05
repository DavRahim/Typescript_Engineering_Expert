// * Top types
let hlwWl = "hello world";
hlwWl = 123;
hlwWl.length;
const something = "Hello World";
// something.length
// *Core types
let something2;
const num = 123;
const name = "mohammad";
something2 = name;
const currentUser = null;
//* Unit types
const greet = () => {
    console.log("Hello World");
};
greet();
//* Sub-type of unit type
const anotherGreet = () => {
    console.log("Hello World");
    return undefined;
};
const greetings = anotherGreet();
console.log(greetings);
//* Bottom type
//! let neverHapping : never = "mohammad"
const getError = (msg) => {
    throw new Error(msg);
};
export {};
//! const x: string = getError("error is this code");
