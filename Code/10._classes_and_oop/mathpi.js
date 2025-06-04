// console.log(Math.PI) // 3.141592653589793

Math.PI = 3.14; // TypeError: Cannot assign to read only property 'PI' of object 'Math'


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);
/*
{ 
    value: 3.141592653589793, 
    writable: false, 
    enumerable: false, 
    configurable: false 
}
*/


const chai = {
    name: "ginger chai",
    price: 258,
    isAwailable: true,

    orderChai: function(){
        console.log("Chai nhi bni")
    }
}

console.log(chai); // { name: 'ginger chai', price: 258, isAwailable: true }

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/


// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false,
// })


// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/


for (const [key, value] of Object.entries(chai)) {
  if (typeof value === 'function') {
    continue; // Skip functions
  }
    console.log(`${key}: ${value}`);
}