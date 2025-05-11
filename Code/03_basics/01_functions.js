
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// function execution
// sayMyName()

// reference
// sayMyName
/*
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

const result = addTwoNumbers(3, 5);
console.log("Result:", result); // undefined
*/

// parameters Vs arguments
// parameters are the variables listed as part of the function's definition
// arguments are the actual values that are passed to the function when it is called


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);

// no code is executed after the return statement as it is unreachable code


// Scope - another video

function loginUserMessage(userName = "sam") {
    if (!userName) {
        return "User name is not provided";
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Hitesh"));

// common in interviews
console.log(loginUserMessage()); // undefined


// default values of parameters 


