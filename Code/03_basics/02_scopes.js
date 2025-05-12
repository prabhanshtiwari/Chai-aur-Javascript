
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
// console.log(c); // 30

// Why var is avoided by most of the people?

// block scope vs global scope: explain


let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a); 
// console.log(b); 
// console.log(c);




// Nested Scope

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); 

    two();
}

// one();


if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); /// error



// ++++++++intresting+++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1;
}



addTwo(5); // error
// function expression
const addTwo = function(num){
    return num + 2;
}


