
/* eslint-disable jsx-quotes */

import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import '../styles/index.css';

function App() {
  return (
    <div className='App' id='app-id'>
      <Display result='' />
      <ButtonPanel />
    </div>
  );
}

export default App;