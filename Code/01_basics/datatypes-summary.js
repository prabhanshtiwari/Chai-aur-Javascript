// Primitive

// 7 types: String, Number, BigInt, Boolean, undefined, null, Symbol

const score = 100;
const scoreValue = 100.3;

const  isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// use of symbol
const id = Symbol('123');
const idanotherId = Symbol('123');
// console.log(id === idanotherId); // false


const bigNumber = 688689263856398563985698596698695745745186n;





// Non-primitive or reference types

// Arrays, Objects, Functions, Dates, Regular Expressions

const heros = ["shaktimaan", "naagraj", "doga"];

const myObj = {
    name: "hitesh",
    age: 22,
};

const myFunction = function () {
    console.log("hello world");
}

// *****************************************


// Stack(Primitive), Heap(Non-primitive)

// Example of copying value
let myYoutubeName = "hiteshchaudhary";
let anotherName = "myYoutubeName"; // copying value
anotherName = "chaiaurcode";
console.log(anotherName);
console.log(myYoutubeName);


// Example of same reference
let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne; // copying reference
userTwo.email = "hitesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);