import React from "react";


class NewNav extends React.Component{
    
    render() {
        function hi() {
            alert("Hello");
        }
        const hello = (name)=>{
            alert("hello" + name);
        }
        function shoot(text) {
            alert("Hello");
        }
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={hi}>Hello</button>
                <button onClick={()=>hello("mark")}>hello2</button>
                <button onClick={()=>hello("john")}>hello3</button>
                <button onClick={()=>hello("Ebuka")}>hello4</button>
            </div>
        )
        
    }
};
export default NewNav;