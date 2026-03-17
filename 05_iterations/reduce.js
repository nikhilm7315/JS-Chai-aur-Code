const myNums = [1, 2, 3]


// ------reduce method using regular function to define callback function

const initialValue = 0;
// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0 )

// console.log(myTotal);


// ------- reduce method using arrow function to define callback function

const myTotal = myNums.reduce( (acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval;
}, 0)

// console.log(myTotal)

// --------another example application of reduce

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 3999
    },

    {
        itemName: "ai/ml course",
        price: 4999
    },

    {
        itemName: "devops course",
        price: 5999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => {
    return acc + item.price;
}, 0 )

console.log(totalPrice)