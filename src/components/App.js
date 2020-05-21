/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */

import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import calculate from "../logic/calculate";
import '../styles/index.css';

function App() {
  return (
    <div className = 'content'>
      <div className='app' id='app-id'>
        <Display result='0' display = 'display' />
        <ButtonPanel className= 'calc-btns'/>
      </div>
    </div>
  );
}

export default App;