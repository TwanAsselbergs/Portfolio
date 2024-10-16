import React, { useState } from "react";
import logo from "./img/logo.jpeg";
import "./style.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="lg:w-[95%] z-[99] px-4 lg:px-0 relative flex justify-between items-center mx-auto py-4 lg:py-6 ">
      <img
        src={logo}
        className="h-[55px] w-[55px] lg:h-[70px] lg:w-[70px] cursor-pointer rounded-full object-cover ml-4 lg:ml-0"
        alt="Twan"
      />
      <ul
        className={`hidden lg:flex text-[#c4cfde] justify-start text-[19px] gap-2 items-center font-bold`}>
        <li className="cursor-pointer duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#features">Features</a>
        </li>
        <li className="cursor-pointer duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="cursor-pointer duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#resume">Resume</a>
        </li>
        <li className="cursor-pointer duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#contact">Contact</a>
        </li>
        <li className="buy-btn text-[#c4cfde] rounded-md px-4 cursor-pointer duration-700 py-4 hover:text-[#2e3136]">
          <a href="/cv/cv.pdf" download>
            CV
          </a>
        </li>
      </ul>
      {/* Mobile Device */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-500 ${
          toggle ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}></div>
      <ul
        className={`fixed top-0 right-0 w-64 h-full text-[#c4cfde] text-[19px] font-bold bg-[#212428] z-50 transition-all duration-500 ease-in-out ${
          toggle ? "right-0" : "right-[-100%]"
        } flex flex-col text-[13px] gap-6 items-center pt-10 border-l border-[#2e3136]`}>
        <li
          onClick={handleToggle}
          className="cursor-pointer duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md mt-8">
          <a href="#home">Home</a>
        </li>
        <li
          onClick={handleToggle}
          className="cursor-pointer duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#features">Features</a>
        </li>
        <li
          onClick={handleToggle}
          className="cursor-pointer  duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={handleToggle}
          className="cursor-pointer  duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#resume">Resume</a>
        </li>
        <li
          onClick={handleToggle}
          className="cursor-pointer  duration-200 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-md">
          <a href="#contact">Contact</a>
        </li>
        <li
          onClick={handleToggle}
          className="buy-btn text-[#c4cfde] rounded-md px-4 cursor-pointer duration-700 hover:shadow-xl shadow-md">
          CV
        </li>
      </ul>
      <FaBars
        onClick={handleToggle}
        className="lg:hidden text-[#c4cfde] text-[25px] cursor-pointer block mr-4 lg:mr-0"
      />
    </div>
  );
};

export default Navbar;
