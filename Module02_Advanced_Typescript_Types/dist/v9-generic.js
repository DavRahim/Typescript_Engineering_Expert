const wrapInArray = (value) => {
    return [value];
};
const stringArray = wrapInArray("ABN");
const numberArray = wrapInArray(123);
const booleanArray = wrapInArray(false);
console.log(stringArray);
console.log(numberArray);
stringArray.map((item) => item.toUpperCase());
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: "Kalam",
        role: "admin",
    },
};
export {};
