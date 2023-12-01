/* A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type "vanilla,vanilla,vanilla,strawberry,coffee,coffee". When they view the browser console, they observe an object listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo. */

//

const froyoFlavor = [
  {
    name: "vanilla",
    color: "white",
    taste: "generic and warm",
  },
  {
    name: "coffee",
    color: "light brown",
    taste: "earthy and aromatic",
  },
  {
    name: "strawberry",
    color: "pink",
    taste: "fruity and sweet"
  }
]
//console.log(froyoFlavor[1]);

const flavorSum = {
  totalVanilla: 0,
  totalCoffee: 0,
  totalStrawberry: 0
};

function iceCream (userInputString) {
  if (iceCream === 'vanilla') {
    flavorSum.totalVanilla += 1;
  } else if (iceCream === 'coffee') {
    flavorSum.totalCoffee += 1;
  } else if (iceCream === 'strawberry') {
    flavorSum.totalStrawberry += 1;
  }
}
  console.log(flavorSum.totalCoffee);


// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

const userInputString = prompt(
  "Please enter some Froyo flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
// const froyoStr = [];
// for (let i = 0; i < stringArray.length; i++) {
//   const str = stringArray[i];
//   const number = parseInt(str);
//   numbers.push(number);
// }
