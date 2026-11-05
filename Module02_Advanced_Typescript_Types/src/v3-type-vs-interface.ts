// * type alias vs interface;

//? Interface is generally connected to Objects
//? type alias is more connected to literals, unions, tuples, primitives;

type id = number;
//! interface id2 number

type Role = "Admin" | "Member";

// ! interface "admin" | "member"

interface IUser {
  name: string;
  id: number;
  role: "admin" | "member";
}

const user: IUser = {
  name: "Jamll",
  id: 34,
  role: "admin",
};

console.log(user, "user");

// TODO: Interface;

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  breed: "Persian",
  species: "Felix Caus",
};

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //? "&" symbol is used to perform intersection
  model: string;
};

const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};

console.log(car);

interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  id: 12,
  name: "ABC",
};

console.log(employee);

type TEmployee = {
  name: string;
};
//! type TEmployee = {
// No valid
// }
