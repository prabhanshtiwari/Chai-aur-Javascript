/*
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
*/



/*
console.log("2" > 1); // true
console.log("02" > 1); // true
*/


// During comparisons, ensure that the datatypes are the same


/*
// // Avoid these type of comparisons.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
*/
// null is converted into 0 and Nan on different situations

/*Notes: Explain iy in easy and detailed way...
The reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
Comparisons convert null to a number, treating it as 0, while equality checks do not.
That is why (3) null >= 0 and (1) null > 0 is false.
*/

/*
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
*/
// Avoid these type of comparisons.


// Strict Check

console.log("2" == 2); // true