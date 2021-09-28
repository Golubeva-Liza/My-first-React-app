//npm start

import React from 'react';//отвечает за работу с react, jsx
import ReactDOM from 'react-dom';//позволяет работать с dom структурой на странице.
//вставляет библиотеку react и наш продукт на страницу
import './index.css';
import App from './App';


//тк это продвинутый инструмент, то webpack сам будет решать ставить ; или нет
const elem = <h2>Hello Liza</h2>;//jsx - реакт элемент, элемент интерфейса

//без jsx
// const elem = React.createElement('h2', null, 'Hello Liza');//3 аргумента - название элем в верстке, названия классов(null если их нет), содержимое тега
//с классом
// const elem = React.createElement('h2', {className: 'green'}, 'Hello Liza');

//сейчас уже импорт react нужен только в главном файле (здесь). но раньше его пихали во всех js файлы

const text = "Hello Liza and Seva";
const nextElem = (//если элемент имеет многострочную структуру, то обязательно обернуть в КРУГЛЫЕ скобки
  <div>
    <h2 className="green">Текст {text}</h2>
    <input type="file"/>
    <button/>
  </div>
);//у такого элемента должен быть 1 РОДИТЕЛЬ ОБЯЗАТЕЛЬНО
//<button/> - кнокпка без контента
//в фигурные скобки (там, где text) мы не можем поместить лишь ОБЪЕКТЫ
//элементы массива схлопываются в строку. вообще всё превращается в строку
//атрибуты в элементах всегда в формате cammelcase, без -
//2 атрибута, которые не совпадают с html - className и htmlFor, тк class и for зарезервированы в js


//должна вызываться 1 раз на верхнем уровне приложения
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,//что мы рендерим на странице
  // elem,
  nextElem,
  document.getElementById('root')//во что мы помещаем (место в index.html)
);

