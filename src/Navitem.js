
function NavItem(props) {
    return (
        <div className="nav-item" style={{ width: "100px", color: "white" }}>
            {props.name}
        </div>
    );
}

export default NavItem;
