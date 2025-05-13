const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// to check if an array is empty, we can use the length property
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// to check if an object is empty, we can use the Object.keys() method
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is useful for providing default values for variables that may be null or undefined.
let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10  // 10
// val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 20  // 10
console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



// Concept of truthy and falsy values in JavaScript

// Truthy values are values that evaluate to true in a boolean context


// Falsy values are values that evaluate to false in a boolean context


// Falsy values in JavaScript:
// false
// 0
// -0
// 0n -> BigInt zero
// "", '', `` (empty string)
// null
// undefined
// NaN
// All other values are truthy


// Truthy values include:
// true
// 1
// -1
// 1n -> BigInt one
// "hello"
// [], {} (empty array and object)
// function() {} (non-empty function)


// Examples of truthy and falsy values
// const values = [false, 0, -0, 0n, "", '', ``, null, undefined, NaN, true, 1, -1, 1n, "hello", [], {}, function() {}];
// values.forEach(value => {
//   if (value) {
//     console.log(`${value} is truthy`);
//   } else {
//     console.log(`${value} is falsy`);
//   }
// }
// );


// // Example of using truthy and falsy values in an if statement
// const userInput = ""; // Simulating user input
// if (userInput) {
//   console.log("User input is truthy");
// }
// else {
//   console.log("User input is falsy");
// }


// // Example of using truthy and falsy values in a while loop
// let count = 0;
// while (count < 5) {
//   console.log(`Count is ${count}`);
//   count++;
// }


// // Example of using truthy and falsy values in a for loop
// for (let i = 0; i < 5; i++) {
//   console.log(`i is ${i}`);
// }
// // Example of using truthy and falsy values in a switch statement
// const value = 1;
// switch (value) {
//   case 0:
//     console.log("Value is 0");
//     break;
//   case 1:
//     console.log("Value is 1");
//     break;
//   default:
//     console.log("Value is something else");
// }
// // Example of using truthy and falsy values in a ternary operator
// const isTrue = true;
// const result = isTrue ? "It's true!" : "It's false!";
// console.log(result);
// // Example of using truthy and falsy values in a logical AND operator
// const a = true;
// const b = false;
// const c = a && b; // c will be false
// console.log(`a && b = ${c}`);
// // Example of using truthy and falsy values in a logical OR operator
// const d = a || b; // d will be true
// console.log(`a || b = ${d}`);

