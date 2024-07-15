import askQuestion from "./question-answer.js";

export default (name) => {
  let expectedAnswer = 0;
  let commonDifference = 0;
  let leftNumbersAmount = 0;
  let RightNumbersAmount = 0;
  let tempNumber = "";
  let question = "";
  let result = false;
  let isBreaked = false;
  console.log("What number is missing in the progression?");
  for (let i = 1; i <= 3; i += 1) {
    expectedAnswer = Math.floor(Math.random() * 1000);
    commonDifference = Math.floor(Math.random() * 100);
    leftNumbersAmount = Math.floor(Math.random() * 10);
    RightNumbersAmount = Math.floor(Math.random() * 10);
    question = `..`;
    tempNumber = expectedAnswer;
    for (let j = 1; j <= leftNumbersAmount; j += 1) {
      tempNumber -= commonDifference;
      question = `${tempNumber} ${question}`;
    }
    tempNumber = expectedAnswer;
    for (let j = 1; j <= RightNumbersAmount; j += 1) {
      tempNumber += commonDifference;
      question = `${question} ${tempNumber}`;
    }
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
