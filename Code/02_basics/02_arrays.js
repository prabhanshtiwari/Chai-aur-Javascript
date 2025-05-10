const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes); // it pushes the entire array as next element

// console.log(marvel_heroes); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heroes[3][1]); // flash

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// The concat method does not change the original array
// It returns a new array that is the result of concatenating the two arrays
// The original array remains unchanged

// spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]; 
// console.log(all_new_heroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// The Infinity parameter means that it will flatten the array to any depth


console.log(Array.isArray("Hitesh"));
// The isArray method returns true if the value is an array, and false if it is not

console.log(Array.from("Hitessh"));
// The from method creates a new array from an array-like or iterable object

console.log(Array.from({ name: "Hitesh" })); // intresting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]