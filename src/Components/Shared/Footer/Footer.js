import React from "react";
import "./Footer.css";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade bottom>
      <div className="home-section">
        <div className="container mx-auto py-8 ">
          <div className="md:flex text-center  md:justify-between md:items-center">
            <div>
              <p className="text-3xl font-extrabold color">Meer_Habib</p>
            </div>
            <div className="social-icons flex w-full ">
              <div className="icons-item w-10 h-10 rounder mr-2 text-gray-500 rounded-full flex justify-center items-center ">
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
      </div>
    </Fade>
  );
};

export default Footer;
