const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;
  if (next && btnName === '+/-') {
    return { next: next * -1 };
  }

  if (total && btnName === '+/-') {
    return { total: total * -1 };
  }
  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
    if (btnName === '%') {
      next = 0.01 * total;
    }
    return { total, next, operation };
  }

  if (btnName === '.') {
    if (next) {
      if (next.includes('.')) return {};
      return { total, next: `${next}.`, operation };
    }
    if (total) {
      if (total.includes('.')) return {};
      return { total: `${total}.`, next, operation };
    }
    return { total: '0.', next, operation };
  }
};

export default calculate;