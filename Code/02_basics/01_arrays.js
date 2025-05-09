// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add element to the end
// myArr.push(7)
// myArr.pop() // remove an element from the end

// myArr.unshift(9) // add element to the beginning
// myArr.shift() // remove an element from the beginning

// console.log(myArr.includes(9)); // check if an element is present
// console.log(myArr.indexOf(3)); // get the index of an element, -1 if not present

// const newArr = myArr.join(); // converts array to string 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // start index, end index, 


console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);