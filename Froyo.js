/* A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type "vanilla,vanilla,vanilla,strawberry,coffee,coffee". When they view the browser console, they observe an object listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo. */

//

// const froyoFlavor = [
//   {
//     name: "Vanilla",
//     color: "white",
//     taste: "generic and warm",
//   },
//   {
//     name: "Coffee",
//     color: "light brown",
//     taste: "earthy and aromatic",
//   },
//   {
//     name: "Strawberry",
//     color: "pink",
//     taste: "fruity and sweet",
//   }
// ]
// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some Froyo flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// // Convert the array of strings into an array of numbers.
// const froyoStr = [];
// for (let i = 0; i < stringArray.length; i++) {
//   const str = stringArray[i];
//   const number = parseInt(str);
//   numbers.push(number);
// }

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===