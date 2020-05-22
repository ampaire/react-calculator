
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
    this.setState = calculate(this.state, btnName);
  }
  render() {
    return (
      <div className="app">
        <Display result="0" display="display" />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}