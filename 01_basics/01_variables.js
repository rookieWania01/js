const accountID = 14432
let accountEmail = "wania@gmail.com"
var accountPassword= "12345"
accountCity="jaipur"
let accountState;

// accountID=2 not allowed

accountEmail="wani@.com"
accountPassword="23232"
accountCity="blore"

console.log(accountID);


/*
prefer not to use var
bcz of issue in block scope and functional scope
*/


console.table([accountID,accountEmail,accountPassword,accountCity, accountState]);

