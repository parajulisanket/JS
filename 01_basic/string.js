const myName = 'sanket'
const surName = 'parajuli'
let myAge = '19'

console.log(myName + surName + myAge); /* outdated method of concatenation*/

console.log(`My name is ${myName} ${surName} and my age is ${myAge}.`); /*modern method of string concatentation */

// another method of declearing string
let sport = new String('football')
let sport1 = 'football'

console.log(sport);
console.log(sport1[1]); /* returns the index value */
console.log(sport1.__proto__);  
console.log(sport1.length);
console.log(sport1.toUpperCase());
console.log(sport1.charAt(4)); /*to find out what value or word is in specific index*/
console.log(sport1.indexOf('t')); /** to find out the position of the value */

const newString = '  Sanket  '

console.log(newString);
console.log(newString.trim()); /**removes unnecessary space  */


let url = 'https://sanketparajuli.com/sanket%30parajuli'
console.log(url.replace('%','-')); /** 'replace' replaces the value or specific word/character taht we want */
console.log(url.includes('sanket'));
console.log(url.includes('samana')); /** this finction checks wheather the word is present iin string or not */