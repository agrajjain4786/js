// singleton
// Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Agraj",
    "Full_name" : "AGRAJ JAIN",
    [mySym]:  "myKey1",
    age: 22,
    location: "Agra",
    email: "agraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser.Full_name);
// console.log(JsUser["email"]);
// console.log(JsUser["Full_name"]);
// console.log(JsUser[mySym]);
// console.log(typeof(JsUser[mySym]));

JsUser.email = "agraj@jain.com"
// Object.freeze(JsUser)

JsUser.email = "agraj@microsoft.com"


JsUser.greeting = function () {
    console.log("hello JS users");
}
JsUser.greetingTwo = function () {
    console.log(`hello JS users, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());