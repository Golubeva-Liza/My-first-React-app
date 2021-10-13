import {Component} from 'react';
import './app-filter.css';
//тут один класс, остальные из bootstrap


const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'hight-salary', label: 'З/п больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;//заменяет запись если props.filter == name верни true
        //будет в active true или false
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return(
            <button 
                onClick={() => {props.onUpdateFilter(name)}}
                className={`btn ${clazz}`}
                type="button"
                key={name}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
    }

export default AppFilter;