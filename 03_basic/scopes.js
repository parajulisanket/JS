let a = 10
const b = 20
var c = 300 
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)




function one(){
    const username = "Sanket Parajuli"

    function two(){
        const website = "youtube"
        // console.log(username)
        // console.log(website)
    }
    // console.log(website)

    two()
}

one()






// Intersting concept
// function 1 is normal function (we can execute the function before or after the function deceleration)

console.log(addOne(5))

function addOne(num){
    return num + 1
}

// console.log(addOne(5))



// function 2 

const addTwo = function(number){
    return number + 1
}

console.log(addTwo(10))
