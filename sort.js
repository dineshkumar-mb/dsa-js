const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let salaries = userInput[1].split(" ").map(Number);

  function bubbleSort(arr) {
    for (let itr = 0; itr < arr.length; itr++) {
      let needToCheck = false;
      for (let ind = 1; ind < arr.length; ind++) {
        if (arr[ind] < arr[ind - 1]) {
          needToCheck = true;
          let temp = arr[ind];
          arr[ind] = arr[ind - 1];
          arr[ind - 1] = temp;
        }
      }
      if (!needToCheck) {
        break;
      }
    }
    return arr;
  }
  let sortedSalaries = bubbleSort(salaries);
  console.log(sortedSalaries);
});
