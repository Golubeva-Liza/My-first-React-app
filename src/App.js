import React from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello mama</h2>
}
// const Field = () => {
//   const holder = "Enter here"
//   const styledFiled = {
//     width: '300px'
//   }
//   return <input placeholder={holder} type="text" style={styledFiled}/>
// }

//компонент созданный с помощью класса
class Field extends React.Component{//из реакт компонент мы берем все базовые вещи и наследуем в наш класс
  render(){//обязательно должен быть метод render
    const holder = "Enter here"
    const styledFiled = {
      width: '200px'
    }
    return <input placeholder={holder} type="text" style={styledFiled}/>
  }
}

function Btn () {
  const text = "Login";
  // const res = () => {
  //   return "Login";
  // }
  const logged = true;
  //? - если да, : если нет
  return <button>{logged ? 'Enter' : text}</button>
}


//компонент
function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
