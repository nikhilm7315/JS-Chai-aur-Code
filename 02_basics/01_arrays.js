// array

const myArr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["ironman", "captainamerica"];
// const myArr2 = new Array(1, 2, 3, 4);  // In this type of defining array there's no need of using big brackets, it automatically adds it.

// console.log(myArr[0]);
// console.log(myArr, myArr2, myHeros);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //This inserts an element in the starting of an array.
// myArr.shift()  //This removes an element inserted in the starting of an array.

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // It became of string type
// console.log(typeof newArr);

// slice, splice


console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) // This will print a section of array elements indexing 1 & 2 excluding 3
console.log(myn1);


console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);

