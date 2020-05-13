import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <h1 class= 'text-center'>This is a react application</h1>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
