function first<T>(arr: T[]) {
  return arr[0];
}

console.log(first(["Apple", "Banana", "Mango"]));

type LunchBox<T> = {
  food: T;
};

const myLunchBox: LunchBox<{
  name: string;
  koytAche: number;
}> = {
  food: {
    name: "Chinech",
    koytAche: 7,
  },
};

const kalamLunchBox: LunchBox<{ name: string; koytaAche: number }> = {
  food: {
    name: "Rice with meet",
    koytaAche: 50,
  },
};

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

const students = [
  { id: 1, name: "Rahim", age: 20, marks: 85 },
  { id: 2, name: "Karim", age: 21, marks: 90 },
  { id: 3, name: "Jamal", age: 22, marks: 75 },
  { id: 4, name: "Hasan", age: 19, marks: 95 },
  { id: 5, name: "Sakib", age: 23, marks: 88 },
];

type StudentResponse = ApiResponse<{
  id: number;
  name: string;
  age: number;
  marks: number;
}>;
type ErrorResponse = ApiResponse<{ massege: string }>;
