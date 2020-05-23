import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const [one, two] = [Big(numberOne), Big(numberTwo)];
  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'X':
      return one.times(two).toString();
    case '/':
      if (two.toString() === '0') {
        return 'Error';
      }
      return one.div(two).toString();
    default:
      return '0';
  }
};

export default operate;
