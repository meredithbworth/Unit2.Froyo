/* A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type "vanilla,vanilla,vanilla,strawberry,coffee,coffee". When they view the browser console, they observe an object listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

We will take in unput from the user of any ice cream flavor in the form of a string. Then we will put those strings of text into an */

const userInputString = prompt(
  "Please enter some Froyo flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// Split the string of ice cream into an array of strings.
const stringArray = userInputString.split(", ");
console.log(stringArray);

// Convert the array of strings into an array of numbers.
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  if (flavorMap[str]) {
    flavorMap[str]++;
  } else {
    flavorMap[str] = 1;
  }
}
console.log(flavorMap);