import operate from './operate';

const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;
  const sign = ['+', 'X', '-', '/'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (btnName === 'AC') {
    [total, next, operation] = [null, null, null];
  }

  if (btnName === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  }

  if (btnName === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  }

  if (btnName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (sign.includes(btnName)) {
    operation = btnName;
  } else if (operation && nums.includes(btnName)) {
    next = next ? next + btnName : btnName;
  } else if (nums.includes(btnName)) {
    total = total ? total + btnName : btnName;
  }
  return { total, next, operation };
};

export default calculate;
