// forEach loop
/*
The forEach loop is a method in JavaScript available on arrays (and some other collections like Map and Set) that allows you to run a function once for each element.

A callback is a function passed into another function as an argument and is executed after the completion of that function’s task.
*/

const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach loop with anonymous function
// coding.forEach( function (val){
//     console.log(val);
// } )

// forEach loop with arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// using named callback

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

/*
Inside forEach, you can access:

value → The current item

index → The item's position in the array

array → The full array

These give you full control to read or manipulate data while iterating.
*/

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// forEach when Objects are elements of array
// The values from the database comes in this format

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// } )