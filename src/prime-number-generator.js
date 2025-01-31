export default (isPrimeNeeded) => {
  // если нужно простое число - передавать в функцию true
  const maxNumber = 1000; // максимальное возможное число
  let result = 0; // переменная для результата

  if (isPrimeNeeded === true) {
    let rightNumber = Math.ceil(Math.random() * (maxNumber - 1)) + 1;
    // сдвиг рандома на +2 вправо, чтобы не попадали 0 и 1
    if (rightNumber === 2) {
      result = 2;
      rightNumber = result; // чтобы пропустить for
    } // возвращаем сразу простое 2 для упрощения алгоритма
    if (rightNumber % 2 === 0) {
      // исключение всех четных чисел, так как они всегда делятся на 2
      rightNumber -= 1;
    }
    if (rightNumber === 3) {
      result = 3;
      rightNumber = result; // чтобы пропустить for
    } // возвращаем сразу простое 3 для упрощения алгоритма
    for (let i = rightNumber; i >= 3; i -= 2) {
      // деления числа на себя исключено путем вычитания 2 изначально,
      // деление числа на 1 исключено 3 в условии остановки цикла
      let counter = 0; // счетчик успешных операций деления
      for (let j = i - 2; j >= 3; j -= 2) {
        if (i % j === 0) {
          counter += 1; // если i делится j - счетчик увеличивается на 1
        }
      }
      if (counter === 0) {
        // если счетчик не увеличился (т.е. число делится на себя и на 1),
        // то число простое и возвращается функцией
        result = i;
        break;
      }
    }
  } else {
    let rightNumber = Math.floor(Math.random() * maxNumber);
    if (rightNumber === 1 || rightNumber === 0) {
      result = rightNumber;
    }
    if (rightNumber === 3 || rightNumber === 2) {
      result = 1;
      rightNumber = result; // чтобы пропустить for
    }
    for (let i = rightNumber; i >= 1; i -= 1) {
      // деления числа на себя исключено путем вычитания 1 изначально,
      // деление числа на 1 исключено 2 в условии остановки цикла
      let counter = 0; // счетчик успешных операций деления
      for (let j = i; j >= 1; j -= 1) {
        if (i % j === 0) {
          counter += 1; // если i делится j - счетчик увеличивается на 1
        }
      }
      if (counter > 2) {
        // если счетчик  увеличился (т.е. число делится не только на себя и на 1),
        // то число не простое и возвращается функцией
        result = i;
        break;
      }
    }
  }
  return result;
};
