export default (firstNumber, secondNumber) => {
  let remainder = 1;
  let divident = firstNumber;
  let divider = secondNumber;
  while (remainder !== 0) {
    remainder = divident % divider;
    divident = divider;
    divider = remainder;
  }
  return divident;
};
