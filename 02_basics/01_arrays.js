// array

const myArr = [0, 1, 2, 3, 4 ,5 ]
const myHeroes = ["me", "myself"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]);
console.log(myArr.length);

// array methods


// myArr.push(21) // to add new elemnt in array
// myArr.pop()    // removes the last elemnt in array
// console.log(myArr);
// myArr.unshift(9)  // array ke starting  mey value push
// myArr.shift()    // removes first elemnt from array

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

const newArr = myArr.join()
let arr1 = [1,2,3]
let joinarr = arr1.join("/")
    console.log(joinarr);
    



//console.log(newArr);

// slice,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);

console.log(myn2);

// array.splice(start, deleteCount, addItems...);
//  let arr = [1,2,5];
// arr.splice(2,0,3,4);
// console.log(arr);
 
// [1,2,3,4,5] output for abv









