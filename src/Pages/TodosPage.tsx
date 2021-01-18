import React, {useEffect, useState} from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";
import {ITodo} from "../interfaces";
declare var confirm: (question: string) => boolean

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodoHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            date: new Date().toLocaleString(),
            completed: false
        }
        //делать изменения на основе старых данных правильнее
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        )
    }

    const removeHandler = (id: number) => {
        if (confirm("вы точно хотите удалить задачу?")) {
            setTodos(prev => prev.filter(todo => todo.id !== id) )
        }
    }



    return (
        <>
            <TodoForm addTodo={addTodoHandler}/>
            <TodoList onRemove={removeHandler} onToggle={toggleHandler} todos={todos}/>
        </>
    )
}

export default TodosPage