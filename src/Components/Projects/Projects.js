import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="w-10/12 mx-auto text-center">
      <h1 className="text-6xl font-extrabold my-10">My Latest Project</h1>
      <p className="font-semibold text-gray-500 pb-10">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <div className="grid grid-cols-3 gap-6 my-10">
        <div className="project-container">
          <div className="bg-img">
            <img
              src="http://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg"
              alt=""
            />
            <div className="bg-overlay"></div>
            <div className="project-info">
              <button className="px-5 rounded text-white py-3 bg  font-bold">
                {" "}
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// http://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg
// http://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg
