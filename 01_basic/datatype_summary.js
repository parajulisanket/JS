/* 
    # primitive: string, number, boolean, null, undefined, symbol, BigInt


    # Non-Primitive (Reference): arrays, objects, functions
*/

// symbol example
const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id);
console.log(anotherId);
console.log(typeof anotherId);


console.log(id === anotherId);
console.log(id === id);

// bigInt

const bigInt1 = BigInt(3232323232)
const bigInt2 = 32932983298329n /* by adding n in last of the number the given number changes into bigInt */
console.log(bigInt1); 
console.log(bigInt2); 


// array

const myArray = ['sanket','samana','parajuli']
console.log(myArray);
console.log(typeof myArray);

// object

const myObject = {name : 'sanket', age : '19'}
console.log(myObject);
console.log(typeof myObject);

// function 

const myFunction = function(){
    console.log("hello world");
}