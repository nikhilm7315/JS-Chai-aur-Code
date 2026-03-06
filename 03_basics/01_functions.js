function sayMyname() {

console.log("N");
console.log("I");
console.log("K");
console.log("H");
console.log("I");
console.log("L");

}

// sayMyname()

// function addTwonumbers(number1, number2){ //number1 and number2 are parameters (while defining function)
//     console.log(number1 + number2);
// }

function addTwonumbers(number1, number2){ //number1 and number2 are parameters (while defining function)
    // let result = number1 + number2
    // return result

    return number1 + number2
    console.log("Nikhil"); //This won't be printed because no code gets executed after return
    
}

const result = addTwonumbers(1, 4) //Here they are arguements (while calling function)
// console.log("Result:", result);

// addTwonumbers(1, "4")
// addTwonumbers(1, "a")

function loginUserMessage(username = "user"){
    if(username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`

}

console.log(loginUserMessage("Nikhil"));
console.log(loginUserMessage());

