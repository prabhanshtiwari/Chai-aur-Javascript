/*
Objects are a collection of key-value pairs
Objects are declared in two ways:
1. Object Literal -- (not singleton)
2. Object Constructor -- (singleton)
*/

// singleton
// Object.create

const mySym = Symbol("key1");


// Object Literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
/*
keys are considered as strings whether you use quotes or not
*/

// How to access objects

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // use quotes to access keys with spaces


// How to use Sybmbol as a key in object?
// const mySym = Symbol("key1");
// [mySym]: "mykey1",

// console.log(JsUser[mySym]);


// How to update Objects?

JsUser.email = "hitesh@chatgpt.com";

// To prevent objects from getting updated/changed
// Object.freeze(JsUser); // It ....
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

// Function are treated as variables

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Why undefined is showing in the output of above two console.log statements?