// Type Alias;

type TUser = {
  id: number;
  name: string;
  role: String;
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
const user1: IUser = {
  name: "Abul Kalam",
  id: 234,
  role: "user1",
};

// type Alias Extension;
type TEmployee = {
  name: string;
};
type TManager = TEmployee & {
  department: string;
};

// Interface Extension;
interface IEmployee {
  name: string;
}
interface IManager extends IEmployee {
  department: string;
}
