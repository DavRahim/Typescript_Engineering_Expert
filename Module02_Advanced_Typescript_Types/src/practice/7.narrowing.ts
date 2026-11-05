// * Type Of Operator;

let x = 345;
console.log(typeof x); // number;

let y = ["123"];
console.log(typeof y === "object");

// * Type Guard & Type Narrowing
type IUser = {
  name: string;
  address: {
    street?: string;
    holdingNumber: number;
  };
};

const loggedUser: IUser = {
  name: "Mohammad",
  address: {
    holdingNumber: 6,
    street: "Ak Khandakar Road",
  },
};

const showAddress = (user: IUser) => {
  if (user && user.address) console.log(user.address.street);
  throw new Error("User not found");
};

showAddress(loggedUser);

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase;
  } else {
    return value.toFixed(2);
  }
};

print("Mohammad");
print(23);
//! print({"sadf",sdf}) Argument of type '{ sadf: any; sdf: any; }' is not assignable to parameter of type 'string | number'.

// * Equality Narrowing;

const compare = (x: number | boolean, y: string | number) => {
  if (x === y) {
    console.log(x, y);
  }
  console.log(x, y);
};

compare(22, "gh");

//* in Operator;

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  return animal.swim();
};

//* "instanceof" Operator check

const date = new Date();
const err = new Error();

console.log(date instanceof Date);
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }

  const date = new Date(x);
  console.log(date.toISOString());
};

showDate(new Date());

// * Discriminated Union

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

const getArea = (shape: Shape) => {
  if (shape.kind === "circle") {
    console.log(Math.PI * shape.radius ** 2);
  } else {
    console.log(shape.sideLength ** 2);
  }
};

getArea({ kind: "circle", radius: 50 });

interface Circle2 {
  kind: "circle";
  radius: number;
}

interface Square2 {
  kind: "square";
  sideLength: number;
}

const getArea2 = (shape: Circle2 | Square2) => {
  if (shape.kind === "circle") {
    console.log(Math.PI * shape.radius ** 2);
  } else {
    console.log(shape.sideLength ** 2);
  }
};
