// this operator:

const user = {
  name: "sanket",
  age: 20,
  welcomeMessage: function () {
    // console.log(`Welcome, ${this.name.toUpperCase()}`);
    // console.log(this);
  },
};

user.welcomeMessage();
user.name = "samana";
user.welcomeMessage();
 



// arrow function

const add = (num1,num2) => {  //basic sample of arrow function 
    return num1 + num2
}
// console.log(add(2,3))



const sub = (num1,num2) => (num1 - num2) // implicit return method, mainly used in react
// const sub = (num1,num2) => ({username:"sanket"})
console.log(sub(4,3))


// if curly bracket/blocks are used in arrow function it is necessary to write return other wise use implicit method

