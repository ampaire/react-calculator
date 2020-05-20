import operate from './operate';

const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;
  if (btnName === 'A/C') {
    total = null;
    next = null;
    operation = null;
  }

  if (btnName === '+/-') {
    if (total) total *= -1;
    if (next) next *= -1;
  }

  if (btnName === '%') {
    if (total) next = 0.01 * total;
  }

  if (btnName === '=') {
    if (total && next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (['+', '-', 'x', '÷', '%'].includes(btnName)) {
    operation = btnName;
  } else if (operation) {
    total += btnName;
  } else {
    next += btnName;
  }
  return { total, next, operation };
};

export default calculate;