import askQuestion from "./question-answer.js";
import primeNumberGenerator from "./prime-number-generator.js";

export default (name) => {
  let result = false;
  let isBreaked = false;
  let question = 1;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const chanceToBePrime = Math.floor(Math.random() * 100);
    if (chanceToBePrime <= 40) {
      // шанс, что вопрос будет с простым числом устанавливается правым компонентом условия
      question = primeNumberGenerator(true);
      result = askQuestion(question, "yes");
    } else {
      question = primeNumberGenerator(false);
      result = askQuestion(question, "no");
    }
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
