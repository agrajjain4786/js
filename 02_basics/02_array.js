const marvel_heros = ["thor", "Ironman", "spiderman"]
const DC_heros = ["superman", "flash", "batman"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(DC_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...DC_heros]

console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Agraj"));
console.log(Array.from("Agraj"));
console.log(Array.from({name: "agraj"})); 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
