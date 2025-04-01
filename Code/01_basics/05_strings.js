/*
const name = "hitesh";
const repoCount = 50;


console.log(name + repoCount + "value")
// Don't use (+ or ,) for concatenation. This is outdated.
// Use template literals instead
// backticks are used for template literals
// string interpolation
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);
*/


// Here, string is object
const gameName = new String("hitesh-hc-com");
console.log(gameName);



console.log(gameName[0]); 
console.log(gameName[1]); 
console.log(gameName[2]); 
console.log(gameName[3]); 
console.log(gameName[4]); 
console.log(gameName[5]); 
console.log(gameName[6]); 
console.log(gameName[7]); 
console.log(gameName[8]); 


console.log(gameName.__proto__); // String {}


// Accessing methods of prototypes
console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.toLowerCase()); 
console.log(gameName.charAt(0)); 
console.log(gameName.indexOf("h"));

// These methods doesn't change the original string because strings are immutable and makes a copy of the string

// As much as you know about string methods, it will be helpful in the future



// Here, the last value is not included
const newString = gameName.substring(0, 4);
console.log(newString); // hith



const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // hith
// The difference between substring and slice is that slice can accept negative values
// if you give negaive value in substring, it will be treated as 0



// trim()

/*
const newStringOne = "    hitesh     ";
console.log(newStringOne);
console.log(newStringOne.trim());

*/


// replace()

const url = "https://hitesh.com/hitesh%20choudhary";
const newUrl = url.replace("%20", "-");
console.log(newUrl); // https://hitesh.com/hitesh-choudhary



console.log(url.includes("hitesh")); // true

console.log(url.includes("sundar")); // false


console.log(gameName.split('-'));
