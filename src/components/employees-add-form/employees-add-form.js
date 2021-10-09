import {Component} from 'react';
import "./employees-add-form.css";

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        //не важно что было введно до этого
        
        this.setState({
            [e.target.name]: e.target.value
            //записывается в одно из свойств в this.state. один обработчик на двух инпутах
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.salary){
            alert('Заполните все данные о сотруднике');
            return;
        }
        if (this.state.name.length < 3){
            alert('Имя сотрудника должно содержать 3 и более символов');
            return;
        }
        this.props.addEmployee(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render(){
        const{name, salary} = this.state;
        // const addEmployee = this.props.addEmployee;
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form action="" className="add-form d-flex">
                    <input 
                        type="text" 
                        className="form-control new-post-label" 
                        placeholder="Как зовут сотрудника?"
                        name="name"
                        onChange={this.onValueChange}
                        value={name}
                    />
                    {/* это управляемый элемент. в него (в value) приходят актуальные значения из state*/}
                    {/* у неуправляемых компонентах значения хранятся прямо в dom дереве. то есть они только в dom будут храниться */}
                    {/* элемент, который всегда будет неуправляемым - это input type-file */}
                    <input 
                        type="number" 
                        className="form-control new-post-label" 
                        placeholder="З/П в $?"
                        name="salary"
                        onChange={this.onValueChange}
                        value={salary}
                    />
                    <button type="button" className="btn btn-outline-light" onClick={this.onSubmit}>Добавить</button>
                    {/* <button type="button" className="btn btn-outline-light" onClick={(e) => addEmployee(e, this.state.name, this.state.salary)}>Добавить</button> */}
                    {/* в таком случае не будет очищаться форма ввода */}
                </form>
            </div>
        )
    }
}
export default EmployeesAddForm;