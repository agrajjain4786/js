const name = "agraj"
const repoCount = 50

// console.log(name + repoCount + " Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('agraj')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));


const newString = gameName.substring(2,5);
console.log(newString);

const anotherStr = gameName.slice(-5,2)
console.log(anotherStr);

const newStr1 = "   Agraj4  "
console.log(newStr1);
console.log(newStr1.trim());


const url = "https://agraj.com/agraj%20jain"

console.log(url.replace('%20','_'));

console.log(url.includes('jain'))

console.log(url.split('/'))