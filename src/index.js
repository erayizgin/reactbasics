import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicForm from './BasicForm';
import StateFilterExample from './StateFilterExample';
import HooksUseeffect from './HooksUseeffect';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BasicForm /> */}
    <StateFilterExample />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
