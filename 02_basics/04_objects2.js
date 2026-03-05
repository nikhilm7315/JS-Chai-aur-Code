// In this we'll declare the objects with help of constructor(singleton)
// const cricuser = new Object()
const cricuser = {}

cricuser.id = "123abc"
cricuser.name = "Nikhil"
cricuser.isLoggedIn = false


// console.log(cricuser);

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nikhil",
            lastname: "Mishra"
        }
    }

}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname[lastname]);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign(obj1, obj2) //This is the right way to merge to objects
// const obj3 = Object.assign({}, obj1, obj2, obj4) //This is the right way to merge to objects


const obj3 = {...obj1, ...obj2, ...obj4} //This is another method by spreading number
// console.log(obj3);

const users = [
    {
        id: "777d",
        email:"d@gmail.com"
    },

    {
        id: "777d",
        email:"d@gmail.com"
    },

    {
        id: "777d",
        email:"d@gmail.com"
    },

]

// console.log(users[1].email)

console.log(Object.keys(cricuser));  //To print all the keys of a defined object
console.log(Object.values(cricuser));  //To print all the values of a defined object

console.log(Object.entries(cricuser));

console.log(cricuser.hasOwnProperty("isLoggedIn"));