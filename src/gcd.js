export default (firstNumber, secondNumber) => {
  let remainder = 1; // остаток
  let divident = firstNumber; // делимое
  let divider = secondNumber; // делитель
  if (divider === 0) {
    // защита от деления на ноль
    divider = 1;
  }
  while (remainder !== 0) {
    // пока остаток от делимого не будет равен 0
    remainder = divident % divider; // вычисление остатка
    divident = divider; // делимое принимает значение делителем
    divider = remainder; // делитель принимает значение остатка
  }
  return divident;
};
