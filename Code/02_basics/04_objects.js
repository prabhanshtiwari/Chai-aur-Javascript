
// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


// optional chaining
// console.log(regularUser?.fullname?.userfullname?.firstname);

// combining objects
const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "a",
    4: "b",
}
const obj4 = {
    5: "a",
    6: "b",
}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    }, 
    {
        id: 2,
        email: "h@gmail.com",
    }, 
    {
        id: 3,
        email: "h@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// important
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));




// De-structuring is done for Arrays and Objects both

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// in react - destructuring
// const navbar = ({company}) => {

// } 
// navbar(company = "hitesh")


// API intro

// json 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Sometimes APIs can be in Array format also

[
    {},
    {},
    {}
]