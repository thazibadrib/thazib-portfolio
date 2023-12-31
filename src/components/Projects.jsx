import React from "react";
import Realtor from "../assets/realtor.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className=" w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-300">
            Projects
          </p>
          <p className="py-6 ">Check out my recent projects</p>
        </div>
        {/* Container */}
        <div
          
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
            {/* Grid Item */}
            
          <div style={{ background: `url(${Realtor})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
            <div className=" opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Realtor Website
              </span>
              <div className="pt-8 text-center ">
                <a href="https://realtor-clone-react-rosy.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/thazibadrib/realtor-clone-react">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of Grid */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
