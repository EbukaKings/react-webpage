import React from "react";
import { Link } from "react-router-dom";
function NavItem(props) {
    return (
        <div className="nav-item" style={{ width: "100px", color: "white" }}>
            {/* <link to={name}>{name}</link> */}
            {props.name}

        </div>
    );
}

export default NavItem;
