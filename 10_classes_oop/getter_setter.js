class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}Agraj`;
  }

  set password(value) {
    this._password = value;
  }
  //   get email(){

  //   }
}

const agraj = new User("agraj@g.com", "ABC");
console.log(agraj.password);
console.log(agraj.email);
