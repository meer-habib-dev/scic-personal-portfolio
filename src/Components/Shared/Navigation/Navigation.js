import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import Fade from "react-reveal/Fade";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Fade top big>
      <div className="hidden md:block">
        <div className="nav-position fixed">
          <div className="w-10/12  bg nav-section rounded px-4 py-3 mx-auto flex justify-between items-center">
            {/* <div className="w-10/12  nav-section rounded px-4 py-3 mx-auto flex justify-between items-center"> */}
            <div>
              {/* <img src={logo} alt="" /> */}
              <p className="text-3xl text-white font-extrabold">Meer_Habib</p>
            </div>
            {toggle && (
              <div className="nav-container">
                <HashLink smooth to="/home#home">
                  Home
                </HashLink>
                <HashLink smooth to="/home#project">
                  Projects
                </HashLink>
                <HashLink smooth to="/home#skill">
                  Skills
                </HashLink>
                <HashLink smooth to="/home#contact">
                  Contact Me
                </HashLink>
              </div>
            )}
            <div>
              <button onClick={handleToggle}>
                <i className="text-white fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Navigation;
