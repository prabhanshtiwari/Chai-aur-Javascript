
// What are promises?
// Why these promises are used?

// How to create promises?

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function () {
        console.log("Async Task is Complete");
        resolve();
    }, 1000)
});

// How to consume promise

promiseOne.then(function() {
    console.log("Promise Consumed");
    
})
/*
- Creation of  Promises
- Promises takes a callback inside it
- Promises reduce callback hell
- The callback function of Promises takes two arguments: resolve, reject


- What  is the use of resolve and reject?
- How to consume promises?
- .then() is directly related to resolve
- .then() takes a callback inside it
- This function automatically receives an argument
- Value is reutrned here
- resolve() must be called to connect it with .then()
- 
*/



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({
            username: "Chai",
            email: "chai@example.com"
        })
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

/*
- We can also sent data into then.
- We will need to specify the data as an argument in the resolve() is called.
 */


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
    
})


/**
- .finally() is always executed.
 */


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);

})



async function consumePromiseFive() {
    
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()




fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
