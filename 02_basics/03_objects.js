// There are two ways in which an object can be declared
// 1. Constructor(Singleton Object is formed) | 2. Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nikhil",      // keys are strings in itself
    "full name": "Nikhil Mishra",  //manually written as a string here and can be accessed through way1 only
    age: "20",
    email: "nikhil@google",
    isLoggedin: true,
    lastLoggedin: ["Monday" , "Tuesday"],
    [mySym]: "mykey1",
    location: "Bhopal"
}

//accessing the objects

// console.log(JsUser["email"]) //way1
// console.log(JsUser.email)    //way2

// console.log(JsUser["full name"])
console.log(JsUser.mySym) //This gives the value but is not the right way of accessing the symbol as its data type is coming as a string
console.log(typeof JsUser.mySym); //you can check it is coming string here


console.log(JsUser[mySym]) // This is the correct way of accessing the symbol inside an onject - this give symbol type
console.log(typeof JsUser[mySym])

JsUser.email = "nikhil@nvidia"
console.log(JsUser["email"]) 

Object.freeze(JsUser.email)
JsUser.email = "nikhil@mckinsey"
console.log(JsUser)