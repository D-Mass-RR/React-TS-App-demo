import React from "react";
import {NavLink} from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-4">
                <NavLink to="/" className="brand-logo right mr1rem ">React TS Todo List</NavLink>
                <ul className="left hide-on-med-and-down">
                    <li className="active"><NavLink to="/">Todo list</NavLink></li>
                    <li><NavLink to="/deleted">Done</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar