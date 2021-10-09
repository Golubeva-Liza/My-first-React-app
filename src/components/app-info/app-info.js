import './app-info.css';
//компоненты называются с большой буквы
const AppInfo = ({employeesNum, increaseNum}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании "CondiBase"</h1>
            <h2>Общее число сотрудников: {employeesNum}</h2>
            <h2>Премию получат: {increaseNum}</h2>
        </div>
    )
}
export default AppInfo;