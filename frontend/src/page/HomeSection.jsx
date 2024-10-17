import React from "react";
import logo from "./img/home-section/logo.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="border-b border-black mt-0 lg:mt-12 sm:w-[90%] w-[95%] md:w-[85%] lg:w-[90%] flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-36 mx-auto py-10 duration-500 pt-24 md:pt-40">
      <div className="lg:w-[45%] mt-10 lg:mt-0 w-full order-2 lg:order-1">
        <h4 className="uppercase tracking-[3px] text-center lg:text-left text-[14px] text-[#c4cfde] mb-4">
          Welcome to my portfolio
        </h4>
        <h1 className="text-[35px] sm:text-[45px] md:text-[50px] lg:text-[55px] text-center lg:text-left xl:text-[60px] mb-4 leading-[50px] lg:leading-[65px] xl:leading-[75px] text-white font-bold">
          Hi, I’m <span className="text-[#c4cfde]">Twan Asselbergs</span>
          <span> a Developer.</span>
        </h1>
        <p className="text-[#c4cfde] text-center lg:text-left leading-[30px] pr-0 md:pr-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis
          unde temporibus iure est rem nisi dicta natus alias, ducimus labore
          vitae omnis qui, amet explicabo molestias voluptatum minus sit?
        </p>
        <div className="sm:mt-12 mt-10 md:mt-16 lg:mt-16 xl:mt-36 px-2 flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-start lg:gap-12 xl:gap-20">
          <div>
            <h6 className="mb-4 text-center lg:text-left text-[14px] tracking-[3px] text-[#c4cfde] uppercase">
              Profiles
            </h6>
            <div className="flex gap-5 text-[20px]">
              <a
                href="https://www.linkedin.com/in/twanasselbergs/"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="w-[60px] rounded-lg cursor-pointer home-icon-btn h-[60px] p-4 bg-[#24272b] shadow-lg hover:shadow-xl duration-500 hover:bg-[#2e3136]" />
              </a>
              <a
                href="https://github.com/TwanAsselbergs"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="w-[60px] rounded-lg cursor-pointer home-icon-btn h-[60px] p-4 bg-[#24272b] shadow-lg hover:shadow-xl duration-500 hover:bg-[#2e3136]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 pt-4 lg:px-0 lg:pt-0 lg:w-[35%] lg:h-[70vh] home-icon-btn order-1 duration-500 lg:order-2 lg:relative">
        <img
          src={logo}
          alt="Logo"
          className="lg:absolute h-full lg:h-auto w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HomeSection;
