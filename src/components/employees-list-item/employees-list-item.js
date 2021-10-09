import './employees-list-item.css';

//пока через класс
const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let employeesClasses = '';
    if (increase){
        employeesClasses += "increase" + ' ';
    }
    if (rise){
        employeesClasses  += "like" + ' ';
    }
    return (
        <li className={`list-group-item d-flex justify-content-between ${employeesClasses}`}>
            <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp} 
                        data-toggle="increase">
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
//defaultValue - в реакте есть этот доп атрибут. value будет изменяться реактом

export default EmployeesListItem;