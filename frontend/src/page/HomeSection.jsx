import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import logo from "./img/home-section/logo.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HomeSection = () => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isProfilesVisible, setIsProfilesVisible] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  const paragraphRef = useRef(null);
  const headingRef = useRef(null);
  const profilesRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const mobileThreshold = 0.1;
    const desktopThreshold = 0.5;

    const observerOptions = {
      threshold: window.matchMedia("(max-width: 768px)").matches
        ? mobileThreshold
        : desktopThreshold,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === paragraphRef.current) {
          setIsParagraphVisible(entry.isIntersecting);
        } else if (entry.target === headingRef.current) {
          setIsHeadingVisible(entry.isIntersecting);
        } else if (entry.target === profilesRef.current) {
          setIsProfilesVisible(entry.isIntersecting);
        } else if (entry.target === logoRef.current) {
          setIsLogoVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (profilesRef.current) observer.observe(profilesRef.current);
    if (logoRef.current) observer.observe(logoRef.current);

    return () => {
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (profilesRef.current) observer.unobserve(profilesRef.current);
      if (logoRef.current) observer.unobserve(logoRef.current);
    };
  }, []);

  return (
    <div
      id="home"
      className="sm:w-[90%] w-[95%] md:w-[85%] lg:w-[90%] flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-36 mx-auto py-10 duration-500 pt-24 md:pt-40 overflow-hidden">
      <div className="lg:w-[45%] w-full order-2 lg:order-1">
        <h1
          ref={headingRef}
          className={classNames(
            "text-[34px] sm:text-[45px] md:text-[50px] lg:text-[55px] text-center lg:text-left xl:text-[60px] mb-4 leading-[50px] lg:leading-[65px] xl:leading-[75px] text-white font-bold transform transition-all duration-1000",
            {
              "translate-x-0 opacity-100": isHeadingVisible,
              "-translate-x-10 opacity-0": !isHeadingVisible,
            }
          )}>
          Hi, I’m <span className="text-[#c4cfde]">Twan Asselbergs</span>
        </h1>
        <p
          ref={paragraphRef}
          className={classNames(
            "text-[#c4cfde] text-sm text-center lg:text-left leading-[30px] pr-6 pl-6 md:pr-0 md:pl-0 mt-6 transform transition-all duration-1000",
            {
              "translate-x-0 opacity-100": isParagraphVisible,
              "-translate-x-10 opacity-0": !isParagraphVisible,
            }
          )}>
          I’m a passionate and eager student currently studying software
          development at Grafisch Lyceum Utrecht. I have a strong interest in
          full-stack development and enjoy creating user-friendly applications.
          My current aspiration is to complete my studies and then move on to
          HBO-Software Developer.
        </p>
        <div
          ref={profilesRef}
          className={classNames(
            "mt-2 md:mt-16 lg:mt-16 xl:mt-36 px-2 flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-start lg:gap-12 xl:gap-20 transform transition-all duration-1000",
            {
              "translate-x-0 opacity-100": isProfilesVisible,
              "-translate-x-10 opacity-0": !isProfilesVisible,
            }
          )}>
          <div>
            <h6 className="mb-4 text-center lg:text-left text-[14px] tracking-[3px] text-[#c4cfde] uppercase">
              Profiles
            </h6>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/twanasselbergs/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="w-[60px] rounded-xl cursor-pointer h-[60px] p-4 text-gray-700 bg-[#24272b] shadow-lg hover:shadow-xl duration-500 hover:bg-[#2e3136]" />
              </a>
              <a
                href="https://github.com/TwanAsselbergs"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="w-[60px] rounded-xl cursor-pointer h-[60px] p-4 text-gray-700 bg-[#24272b] shadow-lg hover:shadow-xl duration-500 hover:bg-[#2e3136]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={logoRef}
        className={classNames(
          "w-full px-4 pt-4 lg:w-[35%] lg:h-[70vh] order-1 lg:order-2 lg:relative transform transition-all duration-1000",
          {
            "translate-x-0 opacity-100": isLogoVisible,
            "translate-x-10 opacity-0": !isLogoVisible,
          }
        )}>
        <img
          src={logo}
          alt="Logo"
          className="lg:absolute object-cover cursor-pointer w-24 h-24 lg:w-full lg:h-[78%] mx-auto mt-2 md:mt-0 rounded-full shadow-2xl hover:shadow-3xl hover:scale-[101%] border-[#383b40] border-2 duration-500"
        />
      </div>
    </div>
  );
};

export default HomeSection;
