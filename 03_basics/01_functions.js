
function sayMyName(){
    console.log("w");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("a");

}

// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){

    return number1 + number2;

}
let result = addTwoNumbers(2,null)

console.log("result: ", result);

function loginUserMessage(username = "sam" ){ // in this way if we do not pass any value username by deafult wud be sam
    if(!username){   // username = "sam" likh diya so by default gave a vale so this if command wont ever be executed
        console.log("please enter a username");
        
    }
    return ` ${username} just logged inn`
}

// console.log(loginUserMessage("wania")); 
// console.log(loginUserMessage()); 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "wania",
    price: "worthless",
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username: "zoi",
    price: 23,
})


const myArr = [19, 16, 10, 1]

function returnsec(Array){
    return console.log(Array[1]);
}
 returnsec(myArr)




