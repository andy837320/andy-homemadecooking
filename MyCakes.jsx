import React from "react";
import { myCakes } from "../utils/data";
import { motion } from "framer-motion";

const MyCakes = () => {
  return (
    // <section className="   bg-gray-400" id="Home">
    <section className="antialiased bg-gray-400 grid grid-cols-1">
      <div className="mt-8 ml-3 text-xl font-semibold text-red-400">
        <p>
          My Home made Cakes : - Please have a glace about my creative cakes
          wohooo 😁
        </p>
      </div>
      <div className="flex w-full min-h-screen justify-center items-center">
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-1 ml-4 mr-4 w-full lg: lg:h-[150] bg-gray-400 "
          id="home"
        >
          {myCakes &&
            myCakes.map((n) => (
              <div
                key={n.id}
                className=" flex flex-row lg:w-500 mt-5 p-4 gap-5  bg-cardOverlay  justify-start items-start backdrop-blur-md rounded-3xl   drop-shadow-lg"
              >
                <div className=" gap-4">
                  <img
                    src={n.imageSrc}
                    className="w-30 lg:w-40 ml-5 mt-5 cursor-pointer "
                    alt="I1"
                  />
                  <p className="text-base lg:text-xl ml-5 font-semibold text-textColor mt-2 lg:mt-4">
                    {n.name}
                  </p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs p-5 text-red-600">$</span>
                    {n.price}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] ml-5  lg:text-sm text-yellow-800 font-semibold my-1  lg:my-3">
                    {n.desc}
                  </p>
                </div>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
};

export default MyCakes;
