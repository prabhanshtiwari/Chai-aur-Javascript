// Immediately Invoked Function Expressions (IIFE)

// Normal function
function chai(){
    console.log("DB CONNECTED");
}
chai();

// IIFE
(function chai(){
    console.log("DB CONNECTED");
})();

// (define function) (execute function)

// using arrow function in IIFE
(() => {
    console.log("DB CONNECTED TWO");
})();
// don't forget to add semicolon at the end of the IIFE

// named function in IIFE with parameters
(function chai(name){
    console.log(`DB CONNECTED ${name}`);
})("hitesh");


// anonymous function with parameters in iife
((name) =>{
    console.log(`DB CONNECTED ${name}`);
})("hitesh");

// how to write two iife in one line
(function chai(name){
    console.log(`1 DB CONNECTED ${name}`);
})("hitesh"), ((name) =>{
    console.log(`2.DB CONNECTED ${name}`);
})("hitesh");

