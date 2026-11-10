// * Partial

interface User {
  id: string;
  name: string;
  email: string;
}

const updateProfile = (id: string, date: Partial<User>) => {};

updateProfile("123", { name: "Kamal" });

// * Required
interface Config {
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>) => {
  // some logic
};

initialize({ apiKey: "123c45bh5t5", timeout: 5000 });

// * Pick
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "Gaming keyboard",
  description: "Best Gaming keyboard",
};

// Omit;

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type publicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: publicEmployee = {
  id: 32,
  name: "mr. jhno",
};

// Record;

type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
  development: "http://localhost:3000",
  staging: "https://staging.api.com",
  production: "https://api.com",
};

console.log(apiUrls.development);
