import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const HeroContainer = () => {
  return (
    <div className="flex w-[80%] mb-60 h-75 mt-36 mx-auto">
      {/* mt-36-9rem  15rem-60 75-300px */}
      <div className="w-[40%] ">
        <div className="translate-x-26.5 translate-y-25">
          {/* y-100px   x-105px */}
          <div className="w-35 h-35 bg-[#A15351]    rounded-xl"></div>
          <div className="w-35 h-35 border-[#A15351] bg-black translate-x-1.25 -translate-y-36.25  z-10  border-3  rounded-xl">
            {/*36.25-145px x-5px-1.25 */}
            <FontAwesomeIcon
              icon="fa-brands fa-node-js"
              className="w-[70%] mx-auto my-3 text-[#A15351]"
            />
          </div>
        </div>
        <div className="translate-x-57.5 -translate-y-77.5">
          {" "}
          {/* y-310px x-230px*/}
          <div className="w-35 h-35 bg-[#A15351]    rounded-xl"></div>
          <div className="w-35 h-35 border-[#A15351] bg-black  translate-x-1.25 -translate-y-36.25  z-10  border-3  rounded-xl">
            {/*36.25-145px x-5px-1.25 */}
            <FontAwesomeIcon
              icon="fa-brands fa-square-js"
              className="w-[70%] mx-auto my-3 text-[#A15351]"
            />
          </div>
        </div>
        {/* <div className="translate-x-[130px] translate-y-[-440px] ">
          <div className="w-35 h-35 bg-[#A15351]    rounded-xl"></div>
          <div className="w-35 h-35 border-[#A15351] bg-black  translate-x-[5px] translate-y-[-145px]    border-3  rounded-xl">
            <FontAwesomeIcon
              icon="fa-brands fa-react"
              className="w-[70%] mx-auto my-5 text-[#A15351]"
            />
          </div>
        </div> */}
        {/* <div className="translate-x-[250px] translate-y-[-600px] ">
          <div className="w-35 h-35 bg-[#A15351]    rounded-xl"></div>
          <div className="w-35 h-35 border-[#A15351] bg-black  translate-x-[5px] translate-y-[-145px]    border-3  rounded-xl">
            <FontAwesomeIcon
              icon="fa-brands fa-docker"
              className="w-[70%] mx-auto my-8 text-[#A15351]"
            />
          </div>
        </div>
         <div className="translate-x-[-130px] translate-y-[-990px] ">
          <div className="w-35 h-35 bg-[#A15351]    rounded-xl"></div>
          <div className="w-35 h-35 border-[#A15351] bg-black  translate-x-[5px] translate-y-[-145px]    border-3  rounded-xl">
            <FontAwesomeIcon
              icon="fa-brands fa-linux"
              className="w-[70%] mx-auto my-3 text-[#A15351]"
            />
          </div>
        </div> */}
      </div>
      <div className="w-[60%]">
        <h1 className="font-poppins text-3xl font-bold ">
          Hi,it's <span className="test-primary">Shamith</span>
        </h1>
        <h2 className="text-xl font-semibold">
          I'm a <span className="test-primary">FullStack Web Developer</span>
        </h2>
        <p className="w-[90%]  py-4 font-poppins">
          Results-driven full-stack developer experienced in building
          production-ready web applications with a strong focus on system
          design, scalability, and real-world business needs.
        </p>
        <div className="flex  gap-2 mt-8">{/*mt-50 -translate-x-50 */}
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              className="w-5 h-5 hover:cursor-pointer"
            />
            <h2 className="text-[12px]"></h2>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin"
              className="w-5 h-5 hover:cursor-pointer"
            />
            <h2 className="text-[12px]"></h2>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon="fa-brands fa-twitter"
              className="w-5 h-5 hover:cursor-pointer"
            />
            <h2 className="text-[12px]"></h2>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon="fa-brands fa-instagram"
              className="w-5 h-5 hover:cursor-pointer"
            />
            <h2 className="text-[12px]"></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
