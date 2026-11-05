// * Top types (Any & Unknown)
// any
let value: any = "hello world";
value = 12;
value = true;
value.toUpperCase();

// unknown
let data: unknown = "Hello Mohammad";
data = 345;

if (typeof data === "string") {
  data.toUpperCase();
}

// * Nullish Types
interface IUser {
  name: string;
}

type TUser = IUser | null;

const currentUser: TUser = { name: "helw" };

type TProduct =
  | {
      name: string;
      price: number;
      productDetails: string;
    }
  | undefined;

//! const product:TProduct = undefined  Cannot redeclare block-scoped variable 'product'.
const product: TProduct = {
  name: "Laptop",
  price: 7000,
  productDetails: "it is a very good product",
};

// * Unit Type (Void)

const sayGreeting = (): void => {
  console.log("Mohammad say hello");
};

sayGreeting();

const sumFun2 = (a: number, b: number): void => {
  console.log(a + b);
  //!  return a + b
};

sumFun2(2, 3);
const anOther = (): void => {
  console.log("Ok i'm print");
  return undefined;
};

const otherFan = anOther();
console.log(otherFan);

// Undefined Return Type

const anotherGreeting = (): undefined => {
  console.log("another greeting");
  return undefined;
};

const greetings = anotherGreeting();
console.log(greetings);

// * Bottom Types Never;
const getError = (message: string): never => {
  throw Error("It's a never function");
};

const infiniteLoop = (): never => {
  while (true) {}
};
