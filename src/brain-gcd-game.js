import askQuestion from './question-answer.js';
import gcd from './gcd.js';
import resultOfGame from './result-of-game.js';

export default (name) => {
  let questionFirstNumber = 0; // второе число в вопросе
  let questionSecondNumber = 0; // второе число в вопросе
  let expectedAnswer = 0; // ожидаемый ответ
  let question = ''; // формируемая строка вопроса
  let result = false; // результат ответа
  let finalResult = true; // условие завершения цикла
  const maxNumber = 1000; // максимальное возможное значение чисел в вопросе

  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    questionFirstNumber = Math.ceil(Math.random() * maxNumber);
    questionSecondNumber = Math.ceil(Math.random() * maxNumber);
    expectedAnswer = gcd(questionFirstNumber, questionSecondNumber);
    question = `${questionFirstNumber} ${questionSecondNumber}`;
    result = askQuestion(question, expectedAnswer);
    if (result !== true) {
      finalResult = false;
      break;
    }
  }
  resultOfGame(name, finalResult);
};
