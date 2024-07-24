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


// chnaging details

myDetail.name = 'Michal'
myDetail.email = 'sanket@gmail.com'
myDetail.age = 20

// Object.freeze(myDetail)
// myDetail.email = "sanketparajuli@gmail.com"
// myDetail.age = 30

// console.log(myDetail);





myDetail.greeting = function(){
    console.log('hello JS user');
}

myDetail.greetingUser = function(){
    console.log(`hello ${this.fullName}`);
}

console.log(myDetail.greeting());
console.log(myDetail.greetingUser());