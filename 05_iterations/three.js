// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);  
// }

// const greetings = "oyasumi dayo"


// for (const greet of greetings) {
//     console.log(greet);
// }

// Maps

// const greetings = "hello wania"
// for (const greet of greetings) {
//     if ( greet === ' ') continue
//     console.log(greet);
    
// }

const map = new Map()
map.set('IN', 'India')
map.set('JP','Japan')
map.set('Fr', 'France')

// console.log(map);

// for (const key  of map) {
//     console.log(key) 
// }

for (const [key, value] of map) {
    console.log(key + ':-' + value);
}

const myobj = {
    'game1': 'nfs',
   ' game2': 'cod',
   ' game3': 'coc',
}

// for (const [key,value] of myobj) {
//     console.log(key +':-'+ value);
// } objects isnt iterable