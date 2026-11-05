const wrapInArray = <T>(value: T) => {
  return [value];
};

const stringArray = wrapInArray<string>("ABN");
const numberArray = wrapInArray<number>(123);
const booleanArray = wrapInArray(false);

console.log(stringArray);
console.log(numberArray);

stringArray.map((item) => item.toUpperCase());

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

const userRes: ApiResponse<User> = {
  statusCode: 200,
  success: true,
  data: {
    name: "Kalam",
    role: "admin",
  },
};
