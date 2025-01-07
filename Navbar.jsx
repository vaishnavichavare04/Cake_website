import React from "react";
import Cupcake from "../assets/Cupcake.png"; 
import {Link} from "react-router-dom"

const Navbar = (Cupcake) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Cupcake Logo" />
        <h1>Welcome to Cake Delights</h1>
      </div>
    </nav>
  );
}

export default Navbar;



