//* "typeof"
let x = ["123"];
console.log(typeof x === "object");
//* Type Guard
const print = (value) => {
    if (typeof value === "string")
        return value.toUpperCase();
    return value;
};
const loggedInUser = {
    name: "Jhon",
    address: {
        street: "aABN",
    },
};
const showAddress = (user) => {
    if (user && user.address)
        console.log(user.address.street);
    throw new Error("User not found");
};
//* some caveat of type Guard;
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};
// const printAll = (x: string | string[] | null) => {
//   if (x && typeof x === "object") {
//     for (let str of x) {
//       console.log(str);
//     }
//   } else if (typeof x === "string") {
//     console.log(x);
//   } else {
//     console.log("");
//   }
// };
printAll("sdfs");
//* Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
//* "instanceof" check
const date = new Date();
const err = new Error("Some =thing error");
console.log(date instanceof Date);
console.log(err instanceof Error);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-16-1971");
const getArea = (shape) => {
    if (shape.kind === "Circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
