import askQuestion from "./question-answer.js";

export default (name) => {
  let questionType = 0; // тип вопроса (0(+), 1(-), 2(*))
  let questionFirstNumber = 0; // первое число в вопросе
  let questionSecondNumber = 0; // второе число в вопросе
  let expectedAnswer = 0; // ожидаемый ответ
  let question = ""; // формируемая строка вопроса
  let result = false; // результат ответа
  let isBreaked = false; // условие завершения цикла
  const maxNumber = 1000; // максимальное возможное значение чисел в вопросе

  console.log("What is the result of the expression?");
  for (let i = 1; i <= 3; i += 1) {
    questionType = Math.floor(Math.random() * 3); // генерация случайного числа от 0 до 2
    switch (
      questionType // 3 возможных исхода 0(+), 1(-), 2(*)
    ) {
      case 1: {
        questionFirstNumber = Math.floor(Math.random() * maxNumber);
        questionSecondNumber = Math.floor(Math.random() * maxNumber);
        question = `${questionFirstNumber} - ${questionSecondNumber}`;
        expectedAnswer = questionFirstNumber - questionSecondNumber;
        break;
      }
      case 2: {
        questionFirstNumber = Math.floor(
          Math.random() * Math.floor(maxNumber / 10)
        );
        questionSecondNumber = Math.floor(
          Math.random() * Math.floor(maxNumber / 10)
        );
        question = `${questionFirstNumber} * ${questionSecondNumber}`;
        expectedAnswer = questionFirstNumber * questionSecondNumber;
        break;
      }
      default: {
        questionFirstNumber = Math.floor(Math.random() * maxNumber);
        questionSecondNumber = Math.floor(Math.random() * maxNumber);
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
