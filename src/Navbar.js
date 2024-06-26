import React from "react";
import NavItem from "./Navitem";

function Navbar() {
    return (
        <div className="navbar">
            <NavItem name="Home" />
            <NavItem name="About us" />
            <NavItem name="Contact us" />
            <NavItem name="Login" />
            <NavItem name="Register" />
        </div>
    );
}

export default Navbar;
