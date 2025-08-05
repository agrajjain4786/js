const user = {
  username: "Agraj",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log('Got user details from database')
    // console.log(`username: ${this.username}`)
    console.log(this);
  },
};

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLogedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLogedin = isLogedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // return this
}

const userOne = new User("Agraj", 12, true);
const userTwo = new User("chaiOrCode", 7, true);
console.log(userOne.constructor);
// console.log(userTwo);

