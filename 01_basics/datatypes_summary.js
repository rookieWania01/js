// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 200.33

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 23211231132322334432n



// reference (non primitive)

// Array, Objects, Functions

const heros = ["wania","astra", "shaifu"];
let myObj = {
    name: "wania",
    age: 101,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof null);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non Primitive)

let myYoutubename = "wamiasiddotcom"

let anothername = myYoutubename
anothername = "waniahehe"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "waniahehe@gmail.com",
    upi: "user@wyl",
}

let userTwo = userOne

userTwo.email = "waniawhyhehe@gmai.com";

console.log(userOne.email);
console.log(userTwo.email);



// use spread to avoid mutation of objets
// let obj1= {...obj1}






