import askQuestion from "./question-answer.js"

export default (name) => {
  let questionNumber = 0;
  let expectedAnswer = ``;
  let result = false;
  let isBreaked = false;


  console.log('Answer "Yes" if the number is even, otherwise answer "No".');
  for (let i = 1; i <= 3; i += 1) {
    questionNumber = Math.floor(Math.random() * 1000);
    if (questionNumber % 2 === 0) {
        expectedAnswer = "yes";
    } else {
        expectedAnswer = "no";
    }
    result = askQuestion(questionNumber, expectedAnswer);
    if (result !== true) {
        isBreaked = true;
        break;
    }
  }
  if (isBreaked) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}`);
  }
}
