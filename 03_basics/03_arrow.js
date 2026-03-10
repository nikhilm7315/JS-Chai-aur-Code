const user = {
    username: "Nikhil",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to our website! Your price is ${this.price}`);
        // console.log(this); // This will print the 'user' object because 'this' refers to the object that is calling the method.
    }
}

// user.welcomeMessage(); // This will print "Nikhil welcome to our website! Your price is

// user.username = "Akhil";
// user.welcomeMessage(); // This will print "Akhil welcome to our website! Your price is 1000"

// console.log(this); // In the global scope, 'this' refers to the global object (window in browsers, global in Node.js). In strict mode, 'this' will be undefined in the global scope.


// function chai() {
//     let username = "abc"
//     console.log(this.username); // In a regular function, 'this' refers to the global object (window in browsers, global in Node.js). In strict mode, 'this' will be undefined in a regular function.
// }

// chai()

// ++++++++++++++++++++++++ Arrow Functions ++++++++++++++++++++++++++

const chai = () => {
    let username = "abc"
    console.log(this);
}

// chai();

// const addtwo = (num1, num2) => {
// return num1 + num2
// }

// Implicit Return
// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2) //If written inside curly brackets then there's no need to write return
// console.log(addtwo(3,4))

const addtwo = (num1, num2) => ({username: "nikhil"})
// console.log(addtwo())


const myArr = [1, 3, 7, 9]

// myArr.forEach(() => ())
// myArr.forEach(() => {})


// function greetings (){

// }

const greetings = (name) => {
    console.log(`${name}`, "we welcome you.")

}

// console.log(greetings("nikhil"))

let calculateSquare = (num) => {
  return Math.pow(num);
}

console.log(calculateSquare(5))