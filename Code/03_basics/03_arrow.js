
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// THIS: refers to current context

// user.welcomeMessage(); // hitesh welcome to website
// user.username = "sam";
// user.welcomeMessage(); // sam welcome to website


// it is refering to empty object
// console.log(this); // window object

// global object in browser: window object

// interview question on window object with answers




// function chai(){
//     let username = "hitesh";
//     console.log(this);
// }
// chai();
// we get a lot of values here


// const  chai = function () {
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai(); // undefined


// Arrow function
const  chai =  () => {
    let username = "hitesh";
    console.log(this);
}

// chai();


// difference between function and arrow function


// arrow function 

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4));
// no need to use return keyword


// can also wrap in brackets
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 4));


// implicit and explicit return


// returning object
const returningObj = () => ({username: "hitesh"});
console.log(returningObj());



// arrow function are also used while using loops
const myArray = [2, 5, 3, 7, 8];

myArray.forEach(function (){

})

myArray.forEach(() =>{
    
})