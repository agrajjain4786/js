// ES6

class User {
    constructor(username, email, pasword) {
        this.username = username
        this.email = email
        this.pasword = pasword
    }

    encryptPassword(){
        return `${this.pasword}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gamil.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User(username, email, pasword) {
    this.username = username
    this.email = email
    this.pasword = pasword
}

User.prototype.encryptPassword = function(){
    return `${this.pasword}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());