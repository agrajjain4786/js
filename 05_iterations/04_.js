const myObject ={
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
    
}

const language = ["js", "cpp", "py", "java", "rb"]

for (const key in language) {
    // console.log(`${key} :- ${language[key]}`);
    
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

for (const key in map) {
    console.log(key);
    
}


