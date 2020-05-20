const calculate = (calculator, btnName) => {
  const { total, next, operation } = calculator;
  if (next && btnName === '+/-') {
    return { next: next * -1 };
  }

  if (total && btnName === '+/-') {
    return { total: total * -1 };
  }
  if (btnName === 'AC') return { total: 0, next: 0, operation:0 };
};

export default calculate;