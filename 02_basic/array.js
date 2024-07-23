// Arrays

const myArr = [1,2,3,4,5]

let myArr1 = new Array(6,7,8,9,10)

// console.log(myArr[2]);
// console.log(myArr1);

// methods of array

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(0)
myArr.unshift(-1)
myArr.unshift(-2) //unshift add the given number or value at front of the array
myArr.unshift(6)
console.log(myArr);
myArr.shift() // shift is similar to pop, it removes the number or value from the front
myArr.shift()
console.log(myArr);
console.log(myArr.includes(4)); // includes function gives answer in true or false
console.log(`the index of 5 is ${myArr.indexOf(5)}`);


// slice 

let newArr = [1,2,3,4,5]
console.log('A =', newArr);

console.log(newArr.slice(1,3)); // slicing doesn't changes orginal array


// splice

let newArr1 = [1,2,3,4,5]
console.log('B =', newArr1);

console.log(newArr1.splice(1,3));
console.log('B =', newArr1);    // splice changes the orginal array


// concat and spread

// concat method:

const marvel_hero = ['thor', 'ironman', 'spiderman']
const dc_hero = ['flash', 'superman', 'batman']

all_hero = marvel_hero.concat(dc_hero)
console.log(all_hero);



// spread operator:

// const marvel_hero = ['thor', 'ironman', 'spiderman']
// const dc_hero = ['flash', 'superman', 'batman']

// const all_hero = [...marvel_hero, ...dc_hero]
// console.log(all_hero);



//flat method
let arr = [1,2,3,4,[3,4,5],4,5,6,[6,7,[8,9]]] 

let real_arr = arr.flat(Infinity)
console.log(real_arr);

// isArray, of, from 