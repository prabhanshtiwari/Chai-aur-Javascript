// Object Literal

const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);
        console.log(this); // this refers to the user object
                
    }
}

// console.log(user.username); // john_doe
// console.log(user.getUserDetails()); // Got user details from database


// console.log(this); // In the global context, 'this' refers to the global object (window in browsers, global in Node.js) 

// object literal

// this keyword

// use of constructor function
// make multiple instances form the same template
// make new context

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
    
}

// What happens if new keyword is not used?
// const userOne =  User('hitesh', 8, true);
// const userTwo =  User('john', 5, false);
// console.log(userOne);
// console.log(userTwo);


// using new keyword creates a new object and sets 'this' to that new object
const userOne = new User('hitesh', 8, true);
const userTwo = new User('john', 5, false);

// console.log(userOne);
// console.log(userTwo);


// What if we hadn't used returned this?
// function User(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
    
// }

// new create create empty object
// constructor function is called with the help of new keyword
// arguments are injected in this keyword 
// we get these things in function

// cpnstructor references the original function 
// console.log(userOne.constructor); // [Function: User]

// instanceOf()
// console.log(userOne instanceof User); // true

