/* eslint-disable jsx-quotes */

import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import '../styles/index.css';

function App() {
  return (
    <div className = 'content'>
      <div className='App' id='app-id'>
        <Display result='0' display = 'display' />
        <ButtonPanel className= 'calc-btns'/>
      </div>
    </div>
  );
}

export default App;