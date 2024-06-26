import React from "react";
import style from "./App.css";
import Header from "./Header";
import NavBar from "./Navbar";
import NavItem from "./Navitem";
import Card from "./components/card";
import About from "./components/about";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom";


import "./project.css";

function App() {
  var header = {
    height:"300px",
    width:"100%",
    backgroundColor:"green"
  };
  return (
    <div>
      <Header />
      <NavBar />

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
  )
};
export default App;