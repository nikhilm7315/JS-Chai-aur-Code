const marvelHeroes = ["Captain Americal", "Iron Man", "Hulk"]
const dcHeroes = ["Superman", "Batman", "Flash"]

// marvelHeroes.push(dcHeroes) //This takes array inside an array as a single element
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]); //This to access the element of an array which was pushed

// console.log(typeof(marvelHeroes));

const allHeroes = marvelHeroes.concat(dcHeroes) //This is good practice, it joins the array into a single array into new array
// console.log(newArr);

// even more good operator is spread operator

const allNewheroes = [...marvelHeroes, ...dcHeroes] // This ... frees each elements of an array into single element
// console.log(allNewheroes);

const another_array = [4, 5, 8, [1, 4, 9, [8, 5, 1, [9, 4, 7]]], 9, 0]
const realanother_array = another_array.flat(2) //The given arguement shows the depth of the array it opened, we can give till infinity too
// console.log(realanother_array);


// console.log(Array.isArray("Nikhil"))
// console.log(Array.from("Nikhil"))

// console.log(Array.from({name: "Nikhil"})) //Intresting (It will give an empty error untill defined if the key is to be made as array or the arguement)

let score1 = 100;
let score2 = 200;
let score3 = 300;

const scorearray = Array.of(score1, score2, score3)
console.log(scorearray)