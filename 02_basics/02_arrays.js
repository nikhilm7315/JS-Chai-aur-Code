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
console.log(allNewheroes);