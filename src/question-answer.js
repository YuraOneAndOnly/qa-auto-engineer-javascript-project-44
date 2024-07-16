import readlineSync from 'readline-sync';
import checkAnswer from './check-answer.js';

export default (question, expectedAnswer) => {
  let result = false; // переменная - результат для возврата
  console.log(`Question: ${question}`);
  const realAnswer = readlineSync.question('Your answer: ');
  if (typeof expectedAnswer === 'string') {
    result = checkAnswer(expectedAnswer.toLowerCase(), realAnswer.toLowerCase());
  } else if (typeof expectedAnswer === 'number') {
    result = checkAnswer(expectedAnswer.toString(), realAnswer.toString());
  }
  return result;
};
