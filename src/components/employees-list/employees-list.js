import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css';

const EmployersList = ({data}) => {
    // перебирается массив data и возвращается новый
    const elements = data.map(item => {
        // можно сделать так
        // const {id, ...itemProps} = item;
        // return (
        //     <EmployeesListItem key={id} {...itemProps}/>
        //     // <EmployeesListItem {...item} /> - то же самое
        // )
        //если с бэка не пришел id, то можно подставить в key так
        // const elements = data.map((item, id) => {
        //такое допускается, если они не будут меняться местами!
        return (
            <EmployeesListItem key={item.id} name={item.name} salary={item.salary} increase={item.increase}/>
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
