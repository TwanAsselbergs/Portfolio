import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import { FaBars, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCvDropdown = () => {
    setCvDropdownOpen(!cvDropdownOpen);
  };

  const handleLogoDropdown = () => {
    setLogoDropdownOpen(!logoDropdownOpen);
  };

  const handleScroll = () => {
    const scrollContainer = document.querySelector(".snap-y");
    if (scrollContainer.scrollTop > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        setCurrentSection(section.id);
      }
    });
  };

  useEffect(() => {
    const scrollContainer = document.querySelector(".snap-y");
    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-[99] px-4 flex justify-between items-center mx-auto bg-[#212428] duration-500 ease-in-out ${
        isScrolled ? "h-20 lg:h-24 shadow-lg" : "h-24 lg:h-32"
      }`}>
      <div
        className="relative group"
        onMouseEnter={handleLogoDropdown}
        onMouseLeave={handleLogoDropdown}>
        <img
          src={logo}
          alt="Twan"
          className={`${
            isScrolled
              ? "h-[55px] w-[55px] lg:h-[70px] lg:w-[70px]"
              : "h-[55px] w-[55px] lg:h-[70px] lg:w-[70px]"
          } cursor-pointer rounded-full object-cover mb-4 lg:mb-0 ml-4 lg:ml-24 mt-4 border-2 duration-500 ease-in-out ${
            logoDropdownOpen ? "border-[#c4cfde]" : "border-[#212428]"
          }`}
        />
        <div className="hidden md:block">
          <div className="opacity-0 lg:p-4 lg:pt-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <div className="absolute left-[78%] transform -translate-x-1/2 mt-3 bg-white rounded-xl">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-1.5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white group-hover:pointer-events-auto group-hover:opacity-100"></div>
                <ul className="">
                  <li className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-xl duration-500">
                    <a
                      href="https://www.linkedin.com/in/twanasselbergs/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </li>
                  <li className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-xl duration-500">
                    <a
                      href="https://github.com/TwanAsselbergs"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul
        className={`hidden lg:flex text-[#c4cfde] justify-start text-[20px] gap-2 items-center font-bold mr-4 lg:mr-24`}>
        <li
          className={`cursor-pointer duration-500 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-xl ${
            currentSection === "home" ? "bg-[#2e3136]" : ""
          }`}>
          <a href="#home">Home</a>
        </li>
        <li
          className={`cursor-pointer duration-500 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-xl ${
            currentSection === "projects" ? "bg-[#2e3136]" : ""
          }`}>
          <a href="#projects">Projects</a>
        </li>
        <li
          className={`cursor-pointer duration-500 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-xl ${
            currentSection === "skills-contact" ? "bg-[#2e3136]" : ""
          }`}>
          <a href="#skills-contact">Skills & Contact</a>
        </li>
        <div
          className="relative group"
          onMouseEnter={handleCvDropdown}
          onMouseLeave={handleCvDropdown}>
          <li className="text-[#c4cfde] rounded-xl px-4 cursor-pointer duration-500">
            <p
              className={`transition-colors duration-500 ease-in-out ${
                cvDropdownOpen ? "text-[#2e3136]" : ""
              }`}>
              CV
            </p>
          </li>
          <div className="absolute left-[94%] transform -translate-x-1/2 p-4 pb-0">
            <div className="left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div className="relative group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-1.5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white group-hover:pointer-events-auto group-hover:opacity-100"></div>
                <ul className="">
                  <li className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-xl duration-500">
                    <a
                      href="cv/Twan Asselbergs CV.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaFilePdf className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ul>
      {/* Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-500 ${
          toggle ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}></div>
      <ul
        className={`fixed top-0 right-0 w-64 h-full text-[#c4cfde] text-[19px] font-bold pt-24 bg-[#212428] z-50 transition-all duration-500 ease-in-out ${
          toggle ? "right-0" : "right-[-100%]"
        } flex flex-col text-[13px] gap-6 items-center pt-10 border-l border-[#2e3136]`}>
        <li
          onClick={handleToggle}
          className={`cursor-pointer duration-500 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-xl ${
            currentSection === "home" ? "bg-[#2e3136]" : ""
          }`}>
          <a href="#home">Home</a>
        </li>
        <li
          onClick={handleToggle}
          className={`cursor-pointer duration-500 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-xl ${
            currentSection === "projects" ? "bg-[#2e3136]" : ""
          }`}>
          <a href="#projects">Projects</a>
        </li>
        <li
          onClick={handleToggle}
          className={`cursor-pointer duration-500 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-xl ${
            currentSection === "skills-contact" ? "bg-[#2e3136]" : ""
          }`}>
          <a href="#skills-contact">Skills & Contact</a>
        </li>
        <li
          onClick={handleToggle}
          className="cursor-pointer duration-500 hover:bg-[#2e3136] p-2 pr-4 pl-4 rounded-xl">
          <a
            href="cv/Twan Asselbergs CV.pdf"
            download
            rel="noopener noreferrer">
            CV
          </a>
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
