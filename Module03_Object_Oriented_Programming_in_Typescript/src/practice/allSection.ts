//* part 1: Typescript Utility Types;

// 1. Partial<T> Make All Properties Optional
interface User {
  id: string;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>;

//2. Required <T> - Make All Properties Required;

interface Config {
  apiKey?: string;
  timeOut?: number;
}

type AppConfig = Required<Config>;
const app: AppConfig = {
  apiKey: "12345",
  timeOut: 345,
};

// 3. Pick<T,K> Select Specific Properties;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

//4. Omit<T,k> - Exclude Specific Properties;

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}
type PublicEmployee = Omit<Employee, "salary" | "nid">;

// 5. Record<K, V> - Create key - value Object Types;

type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
  development: "http://localhodt:3000",
  staging: "https://staging.api.com",
  production: "https://api.com",
};

// Quick Revision:
// Partial → সব Property Optional করে।
// Required → সব Property Required করে।
// Pick → নির্দিষ্ট Property নির্বাচন করে।
// Omit → নির্দিষ্ট Property বাদ দেয়।
// Record → Key-Value Object Type তৈরি করে।
