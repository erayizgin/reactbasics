import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AsynchronousUseReducer from './Asynchronous/AsynchronousUseReducer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BasicForm /> */}
    <AsynchronousUseReducer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
