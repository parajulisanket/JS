// Numbers 

const num = 500
console.log(num);

let newNum = String(num)
console.log(newNum);
console.log(typeof newNum);




const score = 400
console.log(score);
console.log(score.toFixed(3));

const balnace = new Number(100)
console.log(balnace);
console.log(balnace.toString());
console.log(typeof balnace.toString());
console.log(balnace.toString().length);
console.log(balnace.toFixed(2));





const number = 234.3555
console.log(number.toPrecision(3)) /**basically, its a kind of roundoff */



//  Maths

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(45.6));
console.log(Math.ceil(45.6));
console.log(Math.floor(45.6));
console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));

console.log(Math.random()); /** .random always gives the number between 0 and 1 */


//  important concept;

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);