let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2006, 03, 02, 3, 15)
// console.log(myCreatedDate.toString());

let newCreatedDate = new Date("01-04-2026")
// console.log(newCreatedDate.toDateString());
// console.log(newCreatedDate.toLocaleString());
// console.log(newCreatedDate.getTime());

// console.log(Math.floor(newCreatedDate.getTime())/1000);

console.log(newCreatedDate.getDay()); //output 0 because january
console.log(newCreatedDate.getMonth()); //output 0 because sunday
console.log(newCreatedDate.getFullYear());