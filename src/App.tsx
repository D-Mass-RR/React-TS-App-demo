import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import DeletedTodosPage from "./Pages/DeletedTodosPage";
import Navbar from "./Components/Navbar";
import TodosPage from "./Pages/TodosPage";
//обявляем глобальный метод и задаем тип его данным // window.confirm - выводит предупреждение
const App: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar/>
            <Route path="/" exact component={() => <TodosPage />}/>
            <Route path="/deleted" component={() => <DeletedTodosPage />}/>
        </BrowserRouter>
    )
}


export default App;
