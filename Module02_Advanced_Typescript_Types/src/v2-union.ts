// * Literal type
type Status = "pending";
const status: Status = "pending";
console.log(status);

// * Basic Union
type Identity = string | number;
const id: Identity = 1212;
console.log(id);

// * Literal union
type Role = "user" | "admin" | "manager";
const userRole: Role = "admin";
console.log(userRole);

//* Object Union;

type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; plane: string[] };

type User = Admin | Member;

const user: User = { id: 1233, role: "member", plane: ["abc", "def"] };

console.log(user);
