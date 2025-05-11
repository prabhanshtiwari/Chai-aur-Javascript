
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
// console.log(loginUserMessage()); // undefined


// default values of parameters 



// rest/spread operator
// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500));

// rest vs spread operator

// derive concept from the below code
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Hitesh",
    price: 199,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({ username: "sam", price: 399 });


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600]));