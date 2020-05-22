
/* eslint-disable jsx-quotes */

import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import '../styles/index.css';
import calculate from "../logic/calculate";

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
     this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (btnName) => {
    this.setState(calculate(this.state, btnName));
  }
  render() {
    let result;
    const { next,total } = this.state;
    if (next !== null) {
      result = next;
    } else if (total !== null) {
      result = total;
    }
    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}