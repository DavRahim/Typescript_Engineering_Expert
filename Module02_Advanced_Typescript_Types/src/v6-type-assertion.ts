// * Type assertion

//* "as" syntax
type Status = "pending" | "approved" | "rejected";
const someStatus: string = "pending";

const showStatus = (status: Status) => {
  console.log("your status is" + status);
};
showStatus(someStatus as Status);

//* non-null assertion
interface IConfig {
  port?: number;
}
const config: IConfig = {
  port: 5000,
};

// const currentPort: number = config.port!;
const currentPort: number = config.port as number;
console.log(currentPort);

//* constant assertion
const configuration = {
  port: 8080,
  prefix: "/api/v1",
} as const;

// configuration.port = 800 read only
