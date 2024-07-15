import askQuestion from "./question-answer.js";

export default (name) => {
  let questionType = 0;
  let questionFirstNumber = 0;
  let questionSecondNumber = 0;
  let expectedAnswer = 0;
  let question = "";
  let result = false;
  let isBreaked = false;

  console.log("What is the result of the expression?")
  for (let i = 1; i <= 3; i += 1) {
    questionType = Math.floor(Math.random() * 3);
    switch (questionType) {
      case 1: {
        questionFirstNumber = Math.floor(Math.random() * 1000);
        questionSecondNumber = Math.floor(Math.random() * 1000);
        question = `${questionFirstNumber} - ${questionSecondNumber}`;
        expectedAnswer = questionFirstNumber - questionSecondNumber;
        break;
      }
      case 2: {
        questionFirstNumber = Math.floor(Math.random() * 100);
        questionSecondNumber = Math.floor(Math.random() * 100);
        question = `${questionFirstNumber} * ${questionSecondNumber}`;
        expectedAnswer = questionFirstNumber * questionSecondNumber;
        break;
      }
      default: {
        questionFirstNumber = Math.floor(Math.random() * 1000);
        questionSecondNumber = Math.floor(Math.random() * 1000);
        question = `${questionFirstNumber} + ${questionSecondNumber}`;
        expectedAnswer = questionFirstNumber + questionSecondNumber;
        break;
      }
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
