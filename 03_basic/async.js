/* 
Async/Await :               Async : it makes a function return a promis
                            Await : it makes a async function wait for the promis
*/

const { any, reject } = require("async");

// 1
// async function sanket(){
//     return 10
// }

// sanket().then((x) => console.log(x));

// 2
// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = false; // Simulating success
//         if (success) {
//           resolve('Operation completed successfully');
//         } else {
//           reject('Operation failed');
//         }
//       }, 2000);
//     });
//   }

//   asyncOperation()
//     .then(result => {
//       console.log(result); // This will run if the promise is resolved
//     })
//     .catch(error => {
//       console.error(error); // This will run if the promise is rejected
//     })
//     .finally(() => {
//       console.log('Operation finished'); // This will run regardless of resolve or reject
//     });

// 3
// Function to simulate fetching user data from an API
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // Simulate a 70% chance of success

      if (success) {
        const userData = {
          id: userId,
          name: "Sanket Parajuli",
          location: "Baneshwor",
        };
        resolve(userData); // Resolve the promise with user data
      } else {
        reject("Failed to fetch user data. Please try again later."); // Reject the promise with an error message
      }
    }, 2000); // Simulate a network delay of 2 seconds
  });
}

// Async function to fetch and display user data
async function displayUserData(userId) {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData(userId); // Wait for the promise to resolve
    console.log("User Data:", userData); // Log the user data
  } catch (error) {
    console.error("Error:", error); // Log the error if the promise is rejected
  } finally {
    console.log("Task finished."); // This runs regardless of success or error
  }
}

// Call the displayUserData function with a specific userId
// displayUserData(1234);

// 4
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You have walked the dog");
      } else {
        reject("You haven't walked the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenWork = true;
      if (kitchenWork) {
        resolve("You have cleaned the Kitchen");
      } else {
        reject("kitchen is yet to clean");
      }
    }, 2000);
  });
}

async function toDoList() {
  const walkDogDone = await walkDog();
  console.log(walkDogDone);

  const kitchenWorkDone = await cleanKitchen();
  console.log(kitchenWorkDone);
}

toDoList();
