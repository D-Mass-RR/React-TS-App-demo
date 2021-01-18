import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[]
    onRemove(id: number): void
    onToggle(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return <p className="center">Пока дел нет</p>
    }
    return (
        <>
            {
                todos.map(todo => {
                        const classes = ["todo", "mr1rem"]
                        if (todo.completed) {
                            classes.push("completed")
                        }

                        return (
                            <p key={todo.id} className="pdt1">
                                <label>
                                    <input onChange={() => onToggle(todo.id)}
                                           type="checkbox" checked={todo.completed}/>
                                    <span className={classes.join(" ")}>{todo.title}</span>
                                    <span className={classes.join(" ")}>{todo.date}{}</span>
                                </label>
                                <a className="waves-effect waves-dark btn right mr1rem"
                                   onClick={() => onRemove(todo.id)}>remove</a>
                            </p>
                        )
                    }
                )
            }
        </>
    )
}

export default TodoList