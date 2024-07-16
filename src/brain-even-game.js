import askQuestion from "./question-answer.js";

export default (name) => {
  let questionNumber = 0; // число для вопроса
  let expectedAnswer = ``; // ожидаемый ответ
  let result = false; // результат ответа
  let isBreaked = false; // условие завершения цикла
  const maxNumber = 1000; // максимальное возможное значение чисел в вопросе

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    questionNumber = Math.floor(Math.random() * maxNumber);
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
    console.log(`Congratulations, ${name}!`);
  }
};
