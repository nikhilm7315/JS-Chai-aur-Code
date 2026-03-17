const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => num + 10 )
// console.log(newNums)


// const newNums = myNumers.map( (num) => {
//     return num + 10;                     // scope is opened so return need to be written
// } )
// console.log(newNums)


// const myNums = []

// myNumers.forEach( (num) => myNums.push(num + 10))
// console.log(myNums)

// -----------Chaining-----------

const newNums = myNumers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )


console.log(newNums);
        