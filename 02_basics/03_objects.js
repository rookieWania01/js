// singleton

// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "wania",
   "full name": "wania sid", // dot method se ni access kr skte 
   [mySym]: "mykey1",
    age: 19,
    email:" wania@gmail.com",
    isLoggedIn: false,
    lastLOginDays: ["monday", "sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "waniahehe@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "nanahehe@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





