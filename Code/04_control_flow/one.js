
// to execute code based on conditions


// if statement

// if (true) {
//     console.log("This is true");
// }

// if (false) {
//     console.log("This is false");
// }

// explain what happens if condition is true or false in above code snippet


// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("Welcome back!");
// }

// comparison operators are used in conditions
// ==, ===, !=, !==, >, <, >=, <=

// explain the difference between == and ===
// == checks for value only
// === checks for value and type

// explain the difference between != and !==



// if else statement: explain it
// const temperature = 41;
// if (temperature < 50) {
//     console.log("Less than 50");
// } else {
//     console.log(`Temperature is greater than 50`);
// }


// scope related snippet

// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // power is not defined
// explain the error
// out of scope

// if we use var instead of const, the variable will be accessible outside the block


// shorthand without curly braces
// const balance = 1000;
// if(balance > 500) console.log("greater than 500");



// not a good practice
// const balance = 1000;
// if(balance > 500) console.log("greater than 500"), console.log("hello");



// to check multiple conditions
// const balance = 1000;
// if(balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater than 900");
// }

// explain how the above code works
// if the first condition is true, it will not check the rest of the conditions




// real life use of logical operators



// example of and operator
const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn) {
    console.log("Welcome back!");
}
if (userLoggedIn && debitCard) {
    console.log("You can use your debit card");
}


// example of or operator
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("You are logged in from email or google");
}


// Logical operators
// &&, ||, !
// &&: and
// ||: or
// !: not

// explain all logical operators








