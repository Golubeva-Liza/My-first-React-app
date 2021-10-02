//сюда импортируются все компоненты
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {Component} from 'react';

import './app.css';


class WhoAmI extends Component{
    constructor(props){
        super(props);
        //в таком виде конструктор можно убрать. но если в него надо что-то поместить, то другое дело
        //В конструкторе ключевое слово super() используется как функция, вызывающая родительский конструктор. Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора.
        
        //создаем состояние
        this.state = {
            years: 27, 
            position: '',
            text: 'нажми'
        }
        //this.nextYear = this.nextYear.bind(this); //- слева свойства у экземпляра, справа обращаемся к методу и привязываем к конкретному экземпляру класса, чтобы ты не терял this
    }

    nextYear = () => {
        // this.setState({
        //     // years: ++this.state.years - тут инкремент лучше не использовать, тк все равно меняется напрямую состояние
        //     years: this.state.years + 1
        // }); // правильный способ
        //запускает перерисовку всего компонента с новым состоянием (вызов метода render)
        
        // setState - асинхронная операция. Если много раз кликать кнопку сверхбыстро, то предыдущ значение может сбиться (не успеть выполниться предыдущ операция, как пошла уже следующая)
        // решение - callback функция. но когда не важно предыдущее состояние, то можно написать первый вариант (см выше)

        this.setState(state => ({//state-текущее на данным момент состояние
            years: state.years + 1
        }));// синтаксис оборота объекта в круглые скобки = вернуть объект в результате выполнения
        
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
        //после срабатывания setState всегда срабатывает render
    }
    
    render(){
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {years}, position - {position} </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </div>
        )
    }
    //класс создает экземпляры
    //передаем кнопке метод - не вызываем, а указываем

}


function App(){
    // имитируем данные с сервера
    const data = [
        {name: "John G.", salary:800, increase: true, id: 1},
        {name: "Seva G.", salary:3000, increase: false, id: 2},
        {name: "Lera S.", salary:4000, increase: false, id: 3},
        {name: "Max K.", salary:1500, increase: true, id: 4},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>

            <WhoAmI name="John" surname = "Smith" link="facebook.com"/>
            <WhoAmI name="Liza" surname = "Golubeva" link="vk.com"/>
        </div>
    );
}
{/* <EmployeesList data={data}/> - передаю в качестве свойства массив с объектами */}


export default App;