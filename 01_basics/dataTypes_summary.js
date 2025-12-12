// Data Types are categorised by how they are being stored and being accessed

// Primitive Data Type - 7types
// Number, BigInt, String, Boolean, Undefined, Null, Symbol

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(anotherID)
console.log(id === anotherID)

// Non-Primitive Data Type - 3types
// Array, Functions, Objects

let movies = ["marvel", "DC", "Krish"]

console.log(typeof movies)

// All non primitive data types are typeof "object" data type