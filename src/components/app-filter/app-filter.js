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
    // onUpdateFilter = (e) => {
    //     const filterName = e.target.getAttribute('data-filter');
    //     this.props.onUpdateFilter(filterName);//передаем наверх локальное состояние
    // }

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
    }


//я реализовала так, но у нас одинаковые кнопки почти и их лучше оформить пооптимизированнее
// class AppFilter extends Component{
//     constructor(props){
//         super(props);
//     }

//     onUpdateFilter = (e) => {
//         const filterName = e.target.getAttribute('data-filter');
//         this.props.onUpdateFilter(filterName);//передаем наверх локальное состояние
//     }

//     render(){
//         return (
//             <div className="btn-group">
//                 <button 
//                     onClick={this.onUpdateFilter}
//                     className="btn btn-light"
//                     type="button"
//                     data-filter="all">
//                         Все сотрудники
//                 </button>
//                 <button 
//                     onClick={this.onUpdateFilter}
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter="rise">
//                         На повышение
//                 </button>
//                 <button 
//                     onClick={this.onUpdateFilter}
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter="hight-salary">
//                         З/п больше 1000$
//                 </button>
//             </div>
//         )
//     }
// }
export default AppFilter;