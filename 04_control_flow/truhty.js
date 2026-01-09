const useremail = []

if(useremail){
    console.log("got user email");    
} else {
    console.log("dont have user email");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", fucntion(){}

if (useremail.length === 0) console.log('array is empty');

const emptyobj = {}
if(Object.keys(emptyobj).length === 0)
    console.log('obj is empty');

// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 16




console.log(val1);


// terniary operator

// condition ? true : false

const name = "wania"

name == "wania" ? console.log('yes')
 : console.log('no');
 

 const iceteaprice = 900
 iceteaprice <= 1000 ? console.log('less than 1k') : console.log('more than 1k');
 
 
    
