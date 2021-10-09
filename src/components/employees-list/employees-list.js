import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css';

const EmployersList = ({data, onDelete, onToggleProp}) => {
    // перебирается массив data и возвращается новый
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            // <EmployeesListItem key={item.id} name={item.name} salary={item.salary} increase={item.increase}/>
            <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
        // e.currentTarget - чтобы нивилировать всплытие событий и получитьь только то, на что нажали
    });
    // теперь это массив, состоящий из элементов EmployeesListItem

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmployersList;
