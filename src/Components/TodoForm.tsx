import React, {useState} from "react";

interface TodoFormProps {
    addTodo(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.addTodo(title)
            setTitle("")
        }
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input onKeyPress={keyPressHandler}
                               placeholder="Todo" value={title}
                               onChange={changeHandler} type="text"
                               className="validate"/>
                        <span className="helper-text" data-error="wrong" data-success="right">New task</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoForm