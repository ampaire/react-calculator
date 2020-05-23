import operate from './operate';

const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;
  const sign = ['+', 'X', '-', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (btnName === 'AC') {
    [total, next, operation] = [null, null, null];
  }
  if (btnName === '+/-') {
    if (total) total *= -1;
    if (next) next *= -1;
    operation = null;
  }
  if (btnName === '%') {
    if (total) next = 0.01 * total;
  }
  if (btnName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
  if (sign.includes(btnName)) {
    if (total) operation = btnName;
  } else if (operation && nums.includes(btnName)) {
    next = next ? next + btnName : btnName;
  } else if (total && nums.includes(btnName)) {
    total = btnName;
  } else if (nums.includes(btnName)) {
    total = total ? total + btnName : btnName;
  } else if (!next && !operation && btnName === '.') {
    total = total.includes(btnName) ? total : total + btnName;
  } else if (total && operation && btnName === '.') {
    next = next.includes(btnName) ? next : next + btnName;
  }
  return { total, next, operation };
};

export default calculate;
