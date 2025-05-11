
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); 
// console.log(b); 
// console.log(c); 


// var c = 300;

// scope
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }


// console.log(a); // a is not defined
// console.log(b); // b is not defined
console.log(c); // 30

// Why var is avoided by most of the people?

// block scope vs global scope: explain


let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER ", a);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a); 
// console.log(b); 
// console.log(c);


