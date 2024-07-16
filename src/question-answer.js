import readlineSync from "readline-sync";

export default (question, expectedAnswer) => {
  let result = false; // переменная - результат для возврата
  console.log(`Question: ${question}`);
  const realAnswer = readlineSync.question("Your answer: ");
  if (typeof expectedAnswer === "string") {
    if (expectedAnswer.toLowerCase() === realAnswer.toLowerCase()) {
      console.log("Correct!");
      result = true;
    } else {
      console.log(
        `"${realAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`
      );
      result = false;
    }
  } else if (typeof expectedAnswer === "number") {
    if (expectedAnswer.toString() === realAnswer.toString()) {
        console.log("Correct!");
        result = true;
      } else {
        console.log(
          `"${realAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`
        );
        result = false;
      }
  }
  return result;
};
