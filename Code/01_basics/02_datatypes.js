"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we are using nodejs, not browser

console.log(3 
    + 
     3); // code readability should be high 

console.log("Hitesh");

let name = "Hitesh"; // string
let age = 18; // number
let isLoggedIn = false; // boolean
let state; // undefined
let user = null; // null
let symbol = Symbol("I am a symbol"); // symbol
let bigInt = BigInt(1234567890123456789012345678901234567890); // bigint

// string => "Hitesh"   
// number => 2 ^ 53
// bigint
// string => ""
// boolean => true/false
// null => empty value => standalone value
// undefined => variable is declared but not assigned
// symbol => unique value


// object

console.log(typeof "hitesh"); // string

// Interview question
console.log(typeof null); // object
console.log(typeof undefined); // undefined


