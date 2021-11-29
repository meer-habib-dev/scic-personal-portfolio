import React from "react";
import ProgressBar from "react-animated-progress-bar";

import Flip from "react-reveal/Flip";
const Progress = () => {
  return (
    <>
      <div
        id="skill"
        className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-40"
      >
        <Flip bottom>
          <div className=" flex flex-col color justify-center ">
            <div className="w-8/12 pl-20">
              <ProgressBar
                width="500"
                height="10px"
                fontColor="#f9004d"
                trackWidth="10"
                percentage="75"
                trackPathColor=""
                trackBorderColor="black"
                //   hollowBackgroundColor="#f9004d"
                defColor={{
                  fair: "#f9004d",
                  good: "yellow",
                  excellent: "#f9004d",
                  poor: "red",
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <span className="font-bold text-3xl color">JavaScript</span>
            </div>
          </div>
        </Flip>
        <div className=" flex flex-col color justify-center ">
          <Flip top>
            <div className="w-8/12 pl-20">
              <ProgressBar
                width="500"
                height="10px"
                fontColor="black"
                trackWidth="10"
                percentage="90"
                trackPathColor=""
                trackBorderColor="black"
                //   hollowBackgroundColor="#f9004d"
                defColor={{
                  fair: "#f9004d",
                  good: "yellow",
                  excellent: "black",
                  poor: "red",
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <span className="font-bold text-3xl text-black">React</span>
            </div>
          </Flip>
        </div>
        <div className=" flex flex-col color justify-center ">
          <Flip bottom>
            <div className="w-8/12 pl-20">
              <ProgressBar
                width="500"
                height="10px"
                fontColor="#f9004d"
                trackWidth="10"
                percentage="80"
                trackPathColor=""
                trackBorderColor="black"
                //   hollowBackgroundColor="#f9004d"
                defColor={{
                  fair: "#f9004d",
                  good: "yellow",
                  excellent: "#f9004d",
                  poor: "red",
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <span className="font-bold text-3xl">Mern Stack</span>
            </div>
          </Flip>
        </div>
      </div>
    </>
  );
};

export default Progress;
