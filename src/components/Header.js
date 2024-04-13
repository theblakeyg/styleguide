import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <h1>Style Guide</h1>
            <NavLink to="/text">Text</NavLink>
            <NavLink to="/button">Button</NavLink>
        </>
    )
}

export default Header;