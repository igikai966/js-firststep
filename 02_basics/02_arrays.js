const array1=['a','b','c']
const array2=['d','e','f']

const array3= array1.concat(array2);
console.log(array3);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread 
const all_new_heros= [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real=another_array.flat(Infinity)
console.log(real);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));