import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="social-icons flex">
          <div className="icons-item w-10 h-10 rounder mr-2 text-gray-500 rounded-full flex justify-center items-center">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className="icons-item w-10 h-10 rounder mr-2 text-gray-500 rounded-full flex justify-center items-center">
            <i class="fab fa-instagram"></i>
          </div>
          <div className="icons-item w-10 h-10 rounder mr-2 text-gray-500 rounded-full flex justify-center items-center">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="icons-item w-10 h-10 rounder mr-2 text-gray-500 rounded-full flex justify-center items-center">
            <i class="fab fa-github"></i>
          </div>
          <div className="icons-item w-10 h-10 rounder  text-gray-500 rounded-full flex justify-center items-center">
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-text text-gray-300 font-semibold">
          Copyright © 2021. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
