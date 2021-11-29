import React from "react";
import "./Home.css";
import Type from "./Type/Type";
import Footer from "../Shared/Footer/Footer";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Navigation from "../Shared/Navigation/Navigation";
<<<<<<< HEAD
import Progress from "./Progress/Progress";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
=======
import ProgressBar from 'react-animated-progress-bar';
>>>>>>> c9a132d86709690fd2b71c858b506df361e9433c
const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <section id="home">
        <div className=" home-section  h-screen flex flex-col items-center justify-center">
          <Bounce>
            <div className="image-container mt-10">
              <img src="https://i.ibb.co/Bq62DxZ/video-gig-image.jpg" alt="" />
            </div>
          </Bounce>
          <div className="home-text-container flex">
            <p className="heading-name">
              <strong className="text-2xl ml-3  text-white">
                <div className="flex">
                  <Zoom left cascade>
                    This is Me
                  </Zoom>
                  <Zoom right cascade>
                    er_Habib
                  </Zoom>
                </div>
              </strong>
            </p>
          </div>
          <div style={{ padding: 10 }}>
            <p className="text-3xl font-bold color text-center">
              <Type />
            </p>
          </div>
          <div className=" ">
            <a
              href="https://drive.google.com/file/d/1XqrIhCCajUiCRaTl4mJXxKnuxxjc0PF1/view?usp=sharing"
              target="_blank"
            >
              <Jump>
                <button className=" btn-hover w-40 bg-white border-2 text-black transition px-3 py-2 hover:bg hover:text-white hover:bg ml-2 font-bold rounded">
                  Download CV
                </button>
              </Jump>
            </a>
            <a href="https://github.com/meer-habib-dev" target="_blank">
              <Jump>

              <button className=" btn-hover w-40 bg-white border-2 text-black transition px-3 py-2 hover:bg hover:text-white hover:bg ml-2 font-bold rounded">
                Visit GitHub
              </button>
              </Jump>
            </a>
          </div>
        </div>
<<<<<<< HEAD
      </section>
=======
      </div>
      {/* Progress bars */}
      <ProgressBar width="230" trackWidth="13" percentage="60" />
      <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="gray"
        percentage="70"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
>>>>>>> c9a132d86709690fd2b71c858b506df361e9433c
      {/* Projects Section starts Here */}
      <Projects></Projects>
      {/* Skill progress starts here */}
      <Progress></Progress>
      {/* contact page starts here */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
