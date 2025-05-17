// forin loop with objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// forin loop with array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

/*
for...in vs for...of

| Feature                     | `for...in`                                                           | `for...of`                                                     |
| --------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Purpose**                 | Iterates over **enumerable properties** (keys) of an object or array | Iterates over **iterable values** (like arrays, strings, etc.) |
| **Returns**                 | **Keys/indexes** as `strings`                                        | **Values** directly                                            |
| **Use case**                | Best for **objects**                                                 | Best for **arrays, strings, sets, maps, etc.**                 |
| **Can be used on objects?** | ✅ Yes                                                                | ❌ No (throws error unless object is iterable)                  |
| **Can be used on arrays?**  | ✅ Yes (but gives indexes as strings)                                 | ✅ Yes (gives values)                                           |

*/


// for...in with map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
/*
Map is not an object with enumerable properties like regular objects or arrays. It's an iterable, not an enumerable object.

So using for...in on a Map does nothing — it won't iterate over the entries.

*/