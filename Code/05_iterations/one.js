
// Loops or iterations

// 1. For loop

// initialization, condition, increment/decrement
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is best number`);
        
    }
    // console.log(element);
}

// increment/decrement is executed after the code block
// initialization is done only once


// console.log(element); // ReferenceError: element is not defined



// nested for loop
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: i: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: j: ${j} and Inner loop: i: ${i}`);
        // console.log(i + "*" + j + "=" + (i * j));
    }
}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of index is ${index}`);
// }



for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of index is ${index}`);
    
}

// difference between break and continue

