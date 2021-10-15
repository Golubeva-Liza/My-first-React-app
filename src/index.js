//npm start

import React from 'react';//отвечает за работу с react, jsx
import ReactDOM from 'react-dom';//позволяет работать с dom структурой на странице.

import './index.css';
import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//<React.StrictMode> - инструмент для распознавания потенциальных проблем в приложении
//активирует доп проверки. помогает обнаружить устаревшие или небезопасные конструкции
