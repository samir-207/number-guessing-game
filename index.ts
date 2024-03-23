#! usr/bin/env node

import inquirer from "inquirer";

// >tasks<
// 1.Let computer generate a random number.
// 2.Ask user to guess a number.
// 3.Compare both numbers and show result.

const randNumb = Math.floor(Math.random() * 10 + 1);
const ans = await inquirer.prompt([
  {
    message: "Guess a number b/w 1-10 =",
    type: "number",
    name: "numbGuessed",
  },
]);

if (ans.numbGuessed === randNumb) {
  console.log("CONGRATS!!! YOU GUESSED THE SAME COMPUTER DID");
} else {
  console.log("SORRY!!! WRONG GUESS");
}
