import React from "react";
import {NavLink} from "react-router-dom";
import {ITodo} from "../interfaces";

const DeletedTodosPage: React.FC = () => {
    return (
        <>
            <NavLink to="/"><h1>Back</h1></NavLink>
        </>
    )
}

export default DeletedTodosPage