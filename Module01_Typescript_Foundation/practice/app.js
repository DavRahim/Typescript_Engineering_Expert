"use strict";
// *Basic typeScript;
const fullName = "Abul Kalam Azad";
const age = 70;
const isActive = true;
const bigInt = 299n;
const symbolSmile = Symbol();
// * type Safe function
const sumTwo = (a, b) => {
    return a + b;
};
console.log(sumTwo(3, 4));
// * Generic Type
const numArr2 = [1, 234, 45, 56, 6];
const numArr3 = ["1", "234", "45", "56"];
//* General Type
const numArr4 = [1, 234, 45, 56, 6];
const numArr5 = ["1", "234", "45", "56"];
// * tuple and Readonly modifier
const DhakaLongLat = [2123.45, 4673.6];
console.log(DhakaLongLat);
//* Optional, Default and
const contractName = (name, lastName) => {
    return name + "" + lastName;
};
console.log(contractName("Kalam"));
const greetingHello = (name, seyHello = "Greeting") => {
    return name + " " + seyHello;
};
console.log(greetingHello("Kamal"));
// * rest parameters (...args);
const numberSum = (...number) => {
    return number;
};
console.log(numberSum(43, 34, 43, 34));
const personFun = (...person) => {
    const [name, age, isActive] = person;
    return name + " " + age;
};
console.log(personFun("salam", 40, true));
// * Object type, Alias, interface;
const personObj = {
    name: "Dulal vai",
    age: 50,
    isActive: true,
};
const person2 = {
    age: 40,
    isMarred: true,
    name: "Abdul Jobber",
};
const inLoginUser = {
    email: "salam@gmail.com",
    isLogin: true,
    lastName: "Abdul",
    name: "salam",
};
