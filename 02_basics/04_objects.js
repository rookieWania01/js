// const tinderUser = new Object()     // singleton object 
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "zoi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "zoi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "zoi",
            lastname: "sid",
        }
   }
}

// console.log(regularUser.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "okidoki@gmail.com",
    },
    {
        id:2,
        email: "pookie@gmail.com",
    }

]

// console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "to be a bitch",
    price: '9999',
    courseintructor: "waniiiii",
}

// course.courseinstructor

const {courseintructor: instructor} = course
console.log(intructor); // destructure










