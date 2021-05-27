import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper">
      <Link to="/" className="block one">
        All Tasks
      </Link>
      <Link to="/complete" className="block two">
        {" "}
        Completed Tasks
      </Link>
      <Link to="/incomplete" className="block three">
        Incompleted Tasks
      </Link>
    </div>
  );
};

export default Navbar;
