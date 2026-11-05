// * Type assertion
const someStatus = "pending";
const showStatus = (status) => {
    console.log("your status is" + status);
};
showStatus(someStatus);
const config = {
    port: 5000,
};
// const currentPort: number = config.port!;
const currentPort = config.port;
console.log(currentPort);
//* constant assertion
const configuration = {
    port: 8080,
    prefix: "/api/v1",
};
export {};
// configuration.port = 800 read only
