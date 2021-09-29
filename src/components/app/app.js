//сюда импортируются все компоненты
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

//function WhoAmI(props){//props все равно будет сформирован, если даже его не прописать
// function WhoAmI({name, surname, link}){//чаще пишут так - деструктуризация
//     return (
//         <div>
//             <h1>My name is {name()}, surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
// }


function App(){
    // имитируем данные с сервера
    const data = [
        {name: "John G.", salary:800, increase: true},
        {name: "Seva G.", salary:3000, increase: false},
        {name: "Lera S.", salary:4000, increase: false},
        {name: "Max K.", salary:1500, increase: true},
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
        </div>
    );
}
{/* <EmployeesList data={data}/> - передаю в качестве свойства массив с объектами */}


export default App;