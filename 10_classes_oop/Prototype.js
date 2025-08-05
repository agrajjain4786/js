// let myName = "Agraj     "

// console.log(myName.truelength);


let myHeros = ['thor','spiderman']


let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Agraj = function(){
    console.log(`Agraj is present in all objects`)
}

Array.prototype.HiAgraj = function(){
    console.log(`Agraj says hello`)
}

// heroPower.Agraj()
// myHeros.Agraj()
// myHeros.HiAgraj()
// heroPower.HiAgraj()

// inheritance
const user  ={
    username: "chai",
    email: "chai@email.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASuport = {
    makeAssignment : 'js Assingnment',
    fulltime : true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

// morden syntex

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "AJ             "

String.prototype.trueLength = function(){
    // console.log(`${this.name}`)
    console.log(`${this}`)
    console.log(`Ture length is: ${this.trim().length}`)
}

anotherUsername.trueLength()

"Agraj".trueLength()
"iceTea".trueLength()