//* Type Assertion;
const input = document.getElementById("email");

const emailInput = input as HTMLInputElement;

console.log(emailInput.value);

//* constant assertion;(as const);
const configuration = {
  port: 8000,
  prefix: "/api/v2",
} as const;

//! configuration.port = 6000 Cannot assign to 'port' because it is a read-only property.

type TStatus = "approve" | "reject" | "done";

const statusIn: string = "approve";

const getStatus = (status: TStatus) => {
  console.log("you current Status" + status);
};

getStatus(statusIn as TStatus);
