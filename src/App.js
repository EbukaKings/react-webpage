import React from "react";
import style from "./App.css";
import Header from "./Header";
import NavBar from "./Navbar";
import NavItem from "./Navitem";
import Card from "./components/card";
import About from "./components/about";
import NewNav from "./components/newnav"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { Link } from "react-router-dom";
//import Home from "./Home"



import "./project.css";
import Check from "./components/check";

function App() {
  var header = {
    height:"300px",
    width:"100%",
    backgroundColor:"green"
  };
  return (
    // <Router>
    <div>
      <NewNav />
      <Check  isGoal={false}/>
      <Check  isGoal={false}/>
      <Header />
      <NavBar />
      {/* <switch> */}
      {/* <Route path="/about" component={About} /> */}
      {/* </switch> */}

      <div className="container-fluid">
        <div className="row">
          <Card imageName = {"assets/images/diamond.jpg"}/>
          <Card imageName = {"assets/images/mercury.jpg"}/>
          <Card imageName = {"assets/images/register-image.png"}/>
          
        </div>

      </div>
      <div className="container-fluid mt-5">
      <About />
      </div>
    </div>
    
    // </Router>
  )
};
export default App;