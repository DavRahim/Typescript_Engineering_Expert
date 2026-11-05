// Type Alias;

type TUser = {
  id: number;
  name: string;
  role: String;
};

type TProduct = {
  id: number;
  productName: string;
  price: number;
  productDetails?: string;
};

let product: TProduct = {
  id: 12,
  productName: "Mouse",
  price: 400,
  productDetails: "It is very explosive product",
};

const user: TUser = {
  id: 123,
  name: "Mohammad",
  role: "admin",
};

// Interface;
interface IUser {
  id: number;
  name: string;
  role: string;
}

interface IPerson {
  name: string;
  age: number;
  isMarred: boolean;
}
const person: IPerson = {
  name: "Jhon",
  age: 30,
  isMarred: false,
};

const user1: IUser = {
  name: "Abul Kalam",
  id: 234,
  role: "user1",
};

// type ID = string | number;

// const userId: ID = 23;

// type Alias Extension;
type TEmployee = {
  name: string;
};
type TManager = TEmployee & {
  department: string;
};

// Interface Extension;

//! interface ID = boolean

interface IEmployee {
  name: string;
}
interface IManager extends IEmployee {
  department: string;
}

//* Interface vs Type Alias

// A. Union Type
//! interface ID = boolean

type ID = string | number;

const userId: ID = 23;

// B. Intersection Type
type Cow = {
  hight: number;
  wight: number;
};

type Cat = {
  speak: string;
  size: number;
};

type CatAndCow = Cat & Cow;

const catAndCow: CatAndCow = {
  hight: 4,
  wight: 4,
  speak: "Mew Hanba",
  size: 23,
};

interface Cat1 {
  name: string;
}

interface Cat2 extends Cat1 {
  hight: number;
}

let cat2: Cat2 = {
  hight: 23,
  name: "meo",
};

// C. Declaration Merging

interface Mouse {
  brand: string;
}
interface Mouse {
  price: number;
}
let mouse: Mouse = {
  brand: "a4tech",
  price: 34,
};

// !'TMouse' is declared but never used.
// type TMouse = {
//   brand: string
// }
// type TMouse = {
//   price: number
// }
