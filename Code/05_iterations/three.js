// for of
// for (const element of object) {
    
// }

// Common Naming Pattern by Programmers
/*
| Iterable   | Loop Variable (Singular Form) | Example Code                      |
| ---------- | ----------------------------- | --------------------------------- |
| `users`    | `user`                        | `for (const user of users)`       |
| `products` | `product`                     | `for (const product of products)` |
| `items`    | `item`                        | `for (const item of items)`       |
| `students` | `student`                     | `for (const student of students)` |
| `posts`    | `post`                        | `for (const post of posts)`       |
| `comments` | `comment`                     | `for (const comment of comments)` |
| `books`    | `book`                        | `for (const book of books)`       |
| `chars`    | `char`                        | `for (const char of chars)`       |
| `numbers`  | `number`                      | `for (const number of numbers)`   |
*/
// Array can contain Objects and String
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// we can also use forof loop with String
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
/*

*/

// Maps: contains unique values
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
/* Output:
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

// Printing key-value pairs of map
// each element get destructured into key-value variables
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// using forof loop with objects

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
/*
TypeError: myObject is not iterable

Objects are iterated using other methods.
*/
