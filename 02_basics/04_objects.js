// const tinderUser = new Object() //Singleton Object
const tinderUser = {} //Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sanny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "agraj",
            lastname: "jain"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}


const obj4 = {...obj1,...obj2,...obj5}//adding object

const obj3 = Object.assign({},obj1,obj2,obj5) //adding object


// console.log(obj1);
// console.log(obj4);
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@mail.com"
    },
    {
        id: 1,
        email: "a@mail.com"
    },
    {
        id: 1,
        email: "a@mail.com"
    },
    {
        id: 1,
        email: "a@mail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "Someone"
}

// course.courseInstructor

const {courseInstructor : instructor} = course //destructuring

console.log(instructor);

