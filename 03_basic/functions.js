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
// console.log(logInUserMessage()) // it gives user uundefined


// Function with object and array

// rest operator

function addCart(...num1){
  return num1
}

// console.log(addCart(100,200,300,400))


function addCart2(num2,num3,...num1){
  return num1
}

// console.log(addCart2(100,200,300,400))


// function with object

const user = {
  name : "sanket",
  age : "19"
} 

// console.log(user.name)
// console.log(user.age)

function handleObject(){
  console.log(`Username is ${user.name} and age is ${user.age}.`)
}

handleObject(user)


// function with array

const myArr = ['sanket Parajuli', 20]

function handleObject1(newArr){
  return newArr[0]
}

console.log(handleObject1(myArr));