import askQuestion from "./question-answer.js";
import gcd from "./gcd.js";

export default (name) => {
  let questionFirstNumber = 0;
  let questionSecondNumber = 0;
  let expectedAnswer = 0;
  let question = "";
  let result = false;
  let isBreaked = false;
  console.log("Find the greatest common divisor of given numbers.");
  for (let i = 1; i <= 3; i += 1) {
    questionFirstNumber = Math.floor(Math.random() * 100);
    questionSecondNumber = Math.floor(Math.random() * 100);
    expectedAnswer = gcd(questionFirstNumber, questionSecondNumber);
    question = `${questionFirstNumber} ${questionSecondNumber}`;
    result = askQuestion(question, expectedAnswer);
    if (result !== true) {
      isBreaked = true;
      break;
    }
  }
  if (isBreaked) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
