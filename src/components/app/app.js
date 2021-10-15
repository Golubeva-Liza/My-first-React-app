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
                {name: "John G.", salary:800, increase: true, rise: true, id: 1},
                {name: "Seva G.", salary:3000, increase: false, rise: false, id: 2},
                {name: "Lera S.", salary:4000, increase: false, rise: false, id: 3},
                {name: "Max K.", salary:1500, increase: true, rise: false, id: 4},
            ],
            term: '',
            filterName: 'all'
        }//иммутабелен, нельзя напрямую его менять
    }

    deleteItem = (id) => {
        this.setState(({data}) =>{
            //не можем напрямую удалить из data элемент, например, через data.splice(index, 1)
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
            rise: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newData = [...data, newUser];
            return {
                data: newData 
            }
        });
    }

    //методы onToggleRise и onToggleIncrease
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    //метод для поиска сотрудника
    //1 арг - строчка по которой будем искать, 2 арг - массив данных, по которому бдет фильтровать
    searchEmp = (items, term) => {
        //если пользователь что-то ввел, а потом стёр
        if(term.length === 0){
            return items;
        }

        return items.filter(item => {
            //тут поиск идет как в ctrl+f то есть идет поиск подстроки в любом месте
            return item.name.indexOf(term) > -1
        })
    }
    //обновляет term в this.state
    onUpdateSearch = (term) => {
        this.setState({term}); //{term: term}
    }

    onUpdateFilter = (filterName) => {
        this.setState({filterName});
    }

    filterEmp = (items, filterName) => {
        switch (filterName){
            case 'rise': 
                return items.filter(item => item.rise);
            case 'hight-salary': 
                return items.filter(item => item.salary > 1000);
            case 'all': 
                return items;
        }
    }

    render(){
        const {data, term, filterName} = this.state;
        const icreased = data.filter(item => item.increase).length;

        //как скомбинировать и поиск и фильтрацию:
        const visibleData = this.filterEmp(this.searchEmp(data, term), filterName);

        return (
            <div className="app">
                <AppInfo employeesNum={data.length} increaseNum={icreased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filterName} onUpdateFilter={this.onUpdateFilter}/>
                </div>
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm addEmployee={this.addEmployee}/>
            </div>
        );
    }
}

export default App;