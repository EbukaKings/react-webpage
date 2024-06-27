import React from "react";
import NavItem from "./Navitem";

function Navbar() {
    return (
        <div className="navbar">
            <NavItem name="Home" to="/" />
            <NavItem name="About us" to="/about" />
            <NavItem name="Contact us" to="/contact" />
            <NavItem name="Login" to="/login" />
            <NavItem name="Register" to="/register" />
        </div>
    );
}

export default Navbar;
