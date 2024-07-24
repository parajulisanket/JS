const myDetail = {
    name : 'sanket',
    fullName : 'sanket parajuli',
    age : 19,
    location : 'Nepal',
    email: 'parajuli@gmail.com',
    "fatherName" : 'kapil parajuli',
    "motherName" : 'santoshe parajuli',
    "sisterName" : 'samana parajuli'
}

// console.log(myDetail.name);    // majority of the time we will executive object from .method
// console.log(myDetail.fullName.toUpperCase());
// console.log(myDetail.age);
// console.log(myDetail.location);
// console.log(myDetail.email);
// console.log(myDetail["fatherName"].toUpperCase()); //when the object key is declared in string it should be execute in ["..."] method
// console.log(myDetail["motherName"].toLocaleUpperCase());
// console.log(myDetail["sisterName"].toLocaleUpperCase());


// changing details

myDetail.name = 'Michal'
myDetail.email = 'sanket@gmail.com'
myDetail.age = 20

// Object.freeze(myDetail)
// myDetail.email = "sanketparajuli@gmail.com"
// myDetail.age = 30

// console.log(myDetail);


// 
const detail = {
    fullName : {
        firstName : "sanket",
        lastName : "parajuli"  
    },
    age : "20"
}

// console.log(detail);
// console.log(detail.fullName.firstName);
// console.log(detail.fullName.lastName);
// console.log(detail.age);



// merging two or more object 

const obj1 = { a : 1, b : 2}
const obj2 = { c : 3, d : 4}
const obj3 = { e : 5, f : 6}

const allObj = {...obj1, ...obj2, ...obj3}
console.log(allObj);
console.log(Object.keys(allObj));
console.log(Object.values(allObj));
console.log(allObj.hasOwnProperty('d')); // to check wheather the value is present or not 









// functions things 

// myDetail.greeting = function(){
//     console.log('hello JS user');
// }

// myDetail.greetingUser = function(){
//     console.log(`hello ${this.fullName}`);
// }

// console.log(myDetail.greeting());
// console.log(myDetail.greetingUser());


// const newObj = function(){
//     console.log(`this is a new function.`);
// }

// console.log(newObj());
