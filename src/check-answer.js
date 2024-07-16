export default (expectedAnswer, realAnswer) => {
  let result = false;
  if (expectedAnswer.toLowerCase() === realAnswer.toLowerCase()) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`"${realAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
  }
  return result;
};
