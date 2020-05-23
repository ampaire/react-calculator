
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

  handleClick(buttonName) {
    // eslint-disable-next-line no-unused-vars
    const dataObject = this.state;
    this.setState(dataObject => calculate(dataObject, buttonName));
  }


  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="app">
        <Display operation={operation} next={next || '0'} total={total || '0'} />       <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}