
function sayMyName() {
    console.log("a");
    console.log("g");
    console.log("r");
    console.log("a");
    console.log("j");
}

// sayMyName()

function addTwoNumber(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3,5)

// console.log(`result : ${result}`);


function loginUserMessage(username = `sam`) {

    if(username === undefined){
        // console.log();
        return `please enter a username`
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Agraj"));

// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,1000,2000));

const user ={
    username : "agraj",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price : 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([123, 456, 789, 12 ]));


