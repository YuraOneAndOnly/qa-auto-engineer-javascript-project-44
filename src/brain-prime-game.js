import askQuestion from './question-answer.js';
import primeNumberGenerator from './prime-number-generator.js';
import resultOfGame from './result-of-game.js';

export default (name) => {
  let result = false; // результат ответа
  let finalResult = true; // условие завершения цикла
  let question = 1; // число для вопроса
  const maxNumber = 100; // максимальное возможное значение чисел в вопросе

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const chanceToBePrime = Math.floor(Math.random() * maxNumber);
    if (chanceToBePrime <= 40) {
      // шанс, что вопрос будет с простым числом устанавливается правым компонентом условия
      question = primeNumberGenerator(true);
      result = askQuestion(question, 'yes');
    } else {
      question = primeNumberGenerator(false);
      result = askQuestion(question, 'no');
    }
    if (result !== true) {
      finalResult = false;
      break;
    }
  }
  resultOfGame(name, finalResult);
};
