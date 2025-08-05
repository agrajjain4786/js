const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log(`Async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("task 2 promise consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Chai", email: "example@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ username: "Agraj", password: "123" });
    } else {
      reject("Error: Something went wronge");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`The promise is either RESOLVED or REJECTED`);
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: Js went wronge");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumedPromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch('https://api.github.com/users/agrajjain4786')
.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
})
.catch((e)=>{
    console.log(e)
})