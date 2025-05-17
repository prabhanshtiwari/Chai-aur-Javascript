const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// console.log(newNums);
/*
🔍 What map() Does:
- map() is a higher-order function available on arrays in JavaScript.
- It iterates through each element of the array.
- For each element, it runs the callback function you provide.
- It creates a new array with the results of that callback function.
- It does not change the original array.
*/



// chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

/*
In chaining, the result of one methods is passed to another

*/