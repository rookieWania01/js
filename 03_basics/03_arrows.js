const user = {
    username: "wania",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} ,welcome to website`);   
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){ 
//     console.log(this)
// }

// chai()

// const chai = function (){
//     let username = "wania"
//     console.log(this.username);
// }

// chai()    output is undefined in this case

const chai = () => {
    let username = "wania"
    console.log(this);    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)  //{} ni hai so dont use return
const addTwo = (num1, num2) => ({username: "wania"}) //object ko return krne ke liye gotta wrap it in parenthesis


console.log(addTwo(19, 16));

 