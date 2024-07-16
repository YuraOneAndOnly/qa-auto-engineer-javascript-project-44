import askQuestion from "./question-answer.js";

export default (name) => {
  let expectedAnswer = 0; // ожидаемый ответ
  let commonDifference = 0; //
  let leftNumbersAmount = 0; // количество чисел, генерируемое слева
  let RightNumbersAmount = 0; // количество чисел, генерируемое справа
  let tempNumber = ""; // переменная для временного числа, вычисляемого в цикле
  let question = ""; // формируемая строка вопроса
  let result = false; // результат ответа
  let isBreaked = false; // условие завершения цикла
  const maxNumber = 1000; // максимальное возможное значение чисел в вопросе

  console.log("What number is missing in the progression?");
  for (let i = 1; i <= 3; i += 1) {
    expectedAnswer = Math.floor(Math.random() * maxNumber);
    commonDifference = Math.floor(Math.random() * Math.floor(maxNumber / 10));
    leftNumbersAmount = Math.floor(Math.random() * Math.floor(maxNumber / 100));
    RightNumbersAmount = Math.floor(
      Math.random() * Math.floor(maxNumber / 100)
    );
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
