// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("inner: " ,a);
}


// console.log(a);
// console.log(b);
// console.log(a);


function one() {
    const username = "agraj"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()


if(true){
    const username = "agraj"
    if (username === "agraj") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



// +++++++++++++++++++++++++++INTERUSTING+++++++++++++++++++++++


console.log(addone(5));

function addone(num) {   //basic function
    return num + 1
}



addTwo(5)                    //Cannot access 'addTwo' before initialization
const addTwo = function (num) {     //basic function or expression
    return num + 2
}
