const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

// Input values
const n = Number(userInput[0]); // Length of array1
const m = Number(userInput[1]); // Length of array2
const array1 = userInput[3]; // Array 1
const array2 = userInput[4]; // Array 2

// Sort array1 in ascending order
array1.sort((a, b) => a - b);

// Sort array2 in descending order
array2.sort((a, b) => b - a);

// Merge the two arrays
const result = [...array1, ...array2];

// Output the result
console.log(result.join(" "));
});