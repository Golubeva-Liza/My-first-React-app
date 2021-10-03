import './employees-list-item.css';
import {Component} from 'react';

//пока через класс
class EmployeesListItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            //в setState передается state. чтобы не писать state.чего-то, деструктуризируют нужное свойство
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render(){
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;//нам уже не из пропсов надо его получать, а из state

        let employeesClasses = '';
        if (increase){
            employeesClasses += "increase" + ' ';
        }
        if (like){
            employeesClasses  += "like" + ' ';
        }
        return (
            <li className={`list-group-item d-flex justify-content-between ${employeesClasses}`}>
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={this.onIncrease} >
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button onClick={onDelete} type="button" className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
   
}
//defaultValue - в реакте есть этот доп атрибут. value будет изменяться реактом

export default EmployeesListItem;