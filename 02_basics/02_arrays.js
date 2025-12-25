const marvel_heros = ["thor", "superman", "batman"]
const dc_heros = ["flash", "wania", "superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// in concat we can only use two arrays while in ..wala we can add as many as we want to so its generally used

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("wania"))
console.log(Array.from("wania"));
console.log(Array.from({name: "wania"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


