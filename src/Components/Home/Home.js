import React from "react";
import "./Home.css";
import { boss } from "../../images/boss.JPG";
import { Link } from "react-router-dom";
import Type from "./Type/Type";
import Footer from "../Shared/Footer/Footer";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <>
      <div>
        <div className=" home-section w-screen h-screen flex flex-col items-center justify-center">
          <div className="image-container">
            <img src="https://i.ibb.co/Bq62DxZ/video-gig-image.jpg" alt="" />
          </div>
          <div className="home-text-container flex">
            <p className="heading-name">
              <strong className="text-2xl ml-3 text-white">
                This is Meer_Habib
              </strong>
            </p>
          </div>
          <div style={{ padding: 20 }}>
            <p className="text-3xl font-bold color text-center">
              <Type />
            </p>
          </div>
          <div className=" ">
            <a
              href="https://drive.google.com/file/d/1XqrIhCCajUiCRaTl4mJXxKnuxxjc0PF1/view?usp=sharing"
              target="_blank"
            >
              <button className="w-40 bg hover:text-black hover:bg-white transition hover:border-2 px-3 py-2 text-white font-bold rounded mr-2">
                Download CV
              </button>
            </a>
            <a href="https://github.com/meer-habib-dev" target="_blank">
              <button className=" w-40 bg-white border-2 text-black transition px-3 py-2 hover:bg hover:text-white ml-2 font-bold rounded">
                Visit GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Projects Section starts Here */}
      <Projects></Projects>
      {/* contact page starts here */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
