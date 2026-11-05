"use strict";
// Basic types
let myString = "Programming Hero";
let myNumber = 30494;
let myBoolean = true;
let mySymbol = Symbol();
let myBigInt = 100n;
// Type safe function
const addTwo = (a, b) => {
    return a + b;
};
console.log(addTwo(3, 60));
// implicitly
// automatic type pawa ke inplicity bole
// let myString = "Programming Hero";
// Explicitly
// let myString: string = "Programming Hero";
//TODO:  Array and Tuple an readonly modifier;
// const arr: Array<string> = ["Programming", "Hero"]; //Generic
// const numArr: Array<number> = [12, 3, 4, 5];
const arr = ["Programming", "Hero"];
const numArr = [12, 3, 4, 5];
//Tuple
const dhakaLatLong = [23.8103, 90.4125];
dhakaLatLong.push(34);
console.log(dhakaLatLong);
console.log("sdfika");
