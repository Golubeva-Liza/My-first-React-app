//npm start

import React from 'react';//отвечает за работу с react, jsx
import ReactDOM from 'react-dom';//позволяет работать с dom структурой на странице.
//вставляет библиотеку react и наш продукт на страницу
import './index.css';
import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,//что мы рендерим на странице
  document.getElementById('root')//во что мы помещаем (место в index.html)
);

//компоненты реакта пишутся с большой буквы
//<React.StrictMode> - инструмент для распознавания потенциальных проблем в приложении
//активирует доп проверки. помогает обнаружить устаревшие или небезопасные конструкции
