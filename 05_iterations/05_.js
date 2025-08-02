// foreach loop

const codin = ["js", "ruby", "java", "python", "cpp"]

// codin.forEach( function (item){
//     console.log(item);
    
// })

// codin.forEach( (element)=>{
//     console.log(element);
    
// })

// codin.forEach(element => {
//     console.log(element);
    
// });

function printMe(item){
    // console.log(item);
    
}
codin.forEach(printMe) //give reference only 

codin.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})