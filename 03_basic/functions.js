function myName() {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("K");
  console.log("E");
  console.log("T");
}

// myName()
// console.log(myName());



// function addNumbers(a, b) {
//   return a + b; // we will use return inside the function not consol.log()
// }

// console.log(addNumbers(2,4))
// console.log(addNumbers(2, "4"))
// console.log(addNumbers(2, null))



// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log("Result =", addTwoNumbers(10, 20));



// function logInUserMessage(username){
//     return `${username} just logged in.`
// }

// console.log(logInUserMessage('sanket'))
// console.log(logInUserMessage()) // it gives user uundefined



function logInUserMessage(username){
    if(username === undefined){
        return `please enter a username`
    }
    return `${username} just logged in.`
}

// console.log(logInUserMessage('sanket'))
console.log(logInUserMessage()) // it gives user uundefined