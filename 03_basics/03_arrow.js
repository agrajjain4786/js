const user = {
    username: "Agraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function izzat() {
//     let username = "Agraj"
//     console.log(this.username);  
// }

// izzat()

// const izzat = function () {
//     let username = "agraj"
//     console.log(this.username);
    
// }
const izzat = () => {
    let username = "agraj"
    console.log(this.username);
}


// izzat()

// const addTwo = (num1 , num2) => {
//     return num1+num2
// }

// const addTwo = (num1 , num2) => num1+num2

// const addTwo = (num1 , num2) => (num1+num2)\

const addTwo = (num1 , num2) => ({username:"Agraj"})


// console.log(addTwo(5,2));


// const muArray = [2, 3 ,5 ,8 ,9]

// muArray.forEach()