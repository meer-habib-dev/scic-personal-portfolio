import React from "react";
import "./Projects.css";
import RubberBand from "react-reveal/RubberBand";

import Jello from "react-reveal/Jello";
const Projects = () => {
  return (
    <div id="project" className="home-section py-20">
      <div className="w-10/12 mx-auto text-center">
        <RubberBand>
          <h1 className="text-6xl text-white font-extrabold my-10">
            My Latest Project
          </h1>
        </RubberBand>
        <p className="font-semibold text-gray-300 pb-10">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4 my-10">
          <Jello>
            <div className="project-container">
              <div className="bg-img ">
                <img src="https://i.ibb.co/yX1kNVG/React-App-2.png" alt="" />
                <div className="bg-overlay"></div>
                <div className="project-info">
                  <a target="_blank" href="https://book-vacation-spot.web.app/">
                    <button className="px-5 rounded text-black transition py-3 bg-white bg-white font-bold">
                      {" "}
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Jello>
          {/* Second one */}

          <Jello>
            <div className="project-container">
              <div className="bg-img">
                <img src="https://i.ibb.co/n6VxV76/React-App.png" alt="" />
                <div className="bg-overlay"></div>
                <div className="project-info">
                  <a
                    target="_blank"
                    href="https://creative-design-d9dcf.web.app/"
                  >
                    <button className="px-5 rounded text-black transition py-3 bg-white bg-white font-bold">
                      {" "}
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Jello>
          {/* Third One */}
          <Jello>
            <div className="project-container">
              <div className="bg-img">
                <img src="https://i.ibb.co/94394JZ/React-App-1.png" alt="" />
                <div className="bg-overlay"></div>
                <div className="project-info">
                  <a target="_blank" href="https://donto-happy-smile.web.app/">
                    <button className="px-5 rounded text-black transition py-3 bg-white bg-white font-bold">
                      {" "}
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Jello>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// http://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg
// http://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg
