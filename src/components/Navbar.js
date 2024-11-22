import React from "react";
import { Link } from "react-router-dom";
import "./../styles/components.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-list">Add List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
