import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css';

const EmployersList = ({data}) => {
    // перебирается массив data и возвращается новый
    const elements = data.map(item => {
        return (
            <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/>
            // <EmployeesListItem {...item} /> - то же самое
        )
    });
    // теперь это массив, состоящий из элементов EmployeesListItem

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmployersList;

//число тоже в фигурных скобках 0_o
