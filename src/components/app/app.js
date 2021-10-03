//сюда импортируются все компоненты
import {Component} from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component{
    // имитируем данные с сервера
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John G.", salary:800, increase: true, id: 1},
                {name: "Seva G.", salary:3000, increase: false, id: 2},
                {name: "Lera S.", salary:4000, increase: false, id: 3},
                {name: "Max K.", salary:1500, increase: true, id: 4},
            ],
        }//иммутабелен, нельзя напрямую его менять
    }

    deleteItem = (id) => {
        this.setState(({data}) =>{
            //не можем напрямую удалить из data элемент, например, через data.splice(index, 1)
            
            // 1 способ
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);//копируем массив начиная с 0 до index
            // const after = data.slice(index + 1);// копируем начиная с index+1 до конца массива
            // const newData = [...before, ...after];

            //2 способ
            return{
                // data: newData
                data: data.filter(item => item.id !== id)//он создает новый массив
            }
        })
    }

    addEmployee = (name, salary) => {
        const newUser = {
            name,
            salary,
            increase: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newData = [...data, newUser];
            return {
                data: newData 
            }
        });
    }

    render(){
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployeesAddForm addEmployee={this.addEmployee}/>
            </div>
        );
    }
}
{/* <EmployeesList data={data}/> - передаю в качестве свойства массив с объектами */}

export default App;






// class WhoAmI extends Component{
//     constructor(props){
//         super(props);

//         //создаем состояние
//         this.state = {
//             years: 27, 
//             position: '',
//             text: 'нажми'
//         }
//     }

//     nextYear = () => {
//         this.setState(state => ({//state-текущее на данным момент состояние
//             years: state.years + 1
//         }));// синтаксис оборота объекта в круглые скобки = вернуть объект в результате выполнения
        
//     }

//     commitInputChanges = (e) => {
//         this.setState({
//             position: e.target.value
//         })
//         //после срабатывания setState всегда срабатывает render
//     }
    
//     render(){
//         const {name, surname, link} = this.props;
//         const {position, years} = this.state;
//         return (
//             <div>
//                 <button onClick={this.nextYear}>{this.state.text}</button>
//                 <h1>My name is {name}, surname - {surname}, age - {years}, position - {position} </h1>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>
//                     <input type="text" onChange={this.commitInputChanges} />
//                 </form>
//             </div>
//         )
//     }
//     //класс создает экземпляры
//     //передаем кнопке метод - не вызываем, а указываем
// }
{/* <WhoAmI name="John" surname = "Smith" link="facebook.com"/>
<WhoAmI name="Liza" surname = "Golubeva" link="vk.com"/> */}