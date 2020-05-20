/* eslint-disable no-unused-vars */
const calculate = (calculator, btnName) => {
  const { total, next, operation } = calculator;
  if (next && btnName === '+/-') {
    return { next: next * -1 };
  }

  if (total && btnName === '+/-') {
    return { total: total * -1 };
  }
};


export default calculate;