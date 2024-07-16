import askQuestion from './question-answer.js';
import resultOfGame from './result-of-game.js';

export default (name) => {
  let expectedAnswer = 0; // ожидаемый ответ
  let commonDifference = 0; //
  let leftNumbersAmount = 0; // количество чисел, генерируемое слева
  let RightNumbersAmount = 0; // количество чисел, генерируемое справа
  let tempNumber = ''; // переменная для временного числа, вычисляемого в цикле
  let question = ''; // формируемая строка вопроса
  let result = false; // результат ответа
  let finalResult = true; // условие завершения цикла
  const maxNumber = 1000; // максимальное возможное значение чисел в вопросе

  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    expectedAnswer = Math.floor(Math.random() * maxNumber);
    commonDifference = Math.floor(Math.random() * Math.floor(maxNumber / 10));
    leftNumbersAmount = Math.floor(Math.random() * Math.floor(maxNumber / 100)) + 2;
    // сдвиг рандомного количества чисел слева на +2 от нуля,
    // так как нужно минимум 5 элементов в строке
    RightNumbersAmount = Math.floor(Math.random() * Math.floor(maxNumber / 100)) + 2;
    // сдвиг рандомного количества чисел справа на +2 от нуля,
    // так как нужно минимум 5 элементов в строке
    question = '..';
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
      finalResult = false;
      break;
    }
  }
  resultOfGame(name, finalResult);
};
