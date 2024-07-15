#!/usr/bin/env node

import readlineSync from "readline-sync";
import name from "./brain-games.js";

let questionNumber = 0;
let answer = ``;
let isBreak = false;

console.log('Answer "Yes" if the number is even, otherwise answer "No".');
for (let i = 1; i <= 3; i += 1) {
  questionNumber = Math.floor(Math.random() * 1000);
  console.log(`Question: ${questionNumber}`);
  answer = readlineSync.question("Your answer: ");
  if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
    console.log(`Please, answer "Yes" or "No", ${answer} is incorrect!`);
    isBreak = true;
    break;
  }
  if (questionNumber % 2 === 0 && answer.toLowerCase() === "yes") {
    console.log("Correct!");
  } else if (questionNumber % 2 !== 0 && answer.toLowerCase() === "yes") {
    console.log('"Yes" is wrong answer ;(. Correct answer was "No".');
    isBreak = true;
    break;
  } else if (questionNumber % 2 !== 0 && answer.toLowerCase() === "no") {
    console.log("Correct!");
  } else if (questionNumber % 2 === 0 && answer.toLowerCase() === "no") {
    console.log('"No" is wrong answer ;(. Correct answer was "Yes".');
    isBreak = true;
    break;
  }
}
if (isBreak) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}`);
}
