//* Generic;

const identity = <T>(value: T) => {
  return value;
};

identity<string>("Mohammad");

const user = <U>(user: U) => {
  return { user };
};

user<object>({ name: "Abdur" });
user<string>("Abdur");

interface User {
  name: string;
  role: string;
}
interface Blog {
  name: string;
  description: string;
  data: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes2: ApiResponse<User> = {
  data: {
    name: "Kalam",
    role: "Admin",
  },
  statusCode: 200,
  success: true,
};
