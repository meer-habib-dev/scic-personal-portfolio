import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {/* <div className="w-10/12 bg nav-section rounded px-4 py-3 mx-auto flex justify-between items-center"> */}
      <div className="w-10/12  nav-section rounded px-4 py-3 mx-auto flex justify-between items-center">
        <div>
          {/* <img src={logo} alt="" /> */}
          <p className="text-3xl text-white font-extrabold">Meer_Habib</p>
        </div>
        {toggle && (
          <div className="nav-container">
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        )}
        <div>
          <button onClick={handleToggle}>
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
