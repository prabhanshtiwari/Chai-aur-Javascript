
// Dates
/*
let myDate = new Date();
console.log(myDate);


console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString())

console.log(typeof myDate); // object
*/
/*
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());
// Note: Months start from zero in JS
*/

/*
let myCreatedDate = new Date(2023, 0, 23, 5, 3); 
console.log(myCreatedDate.toLocaleString());
*/
/*
let myCreatedDate = new Date("2023-01-14"); 
console.log(myCreatedDate.toLocaleString());
*/
/*
let myCreatedDate = new Date("01-14-2023"); 
console.log(myCreatedDate.toLocaleString());
*/
/*
let myTimeStamp = Date.now();
console.log(myTimeStamp); // in milli-seconds

let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.getTime()); // in milli-seconds

// to convert into seconds
console.log(Math.floor(Date.now()/1000));
*/

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getMonth());


newDate.toLocaleString("default", {
    weekday: "long",
})

