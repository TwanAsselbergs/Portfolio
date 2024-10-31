import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ContactSection = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const titleObserverOptions = {
      threshold: 0.01,
    };

    const titleObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setIsTitleVisible(entry.isIntersecting);
      });
    };

    const titleObserver = new IntersectionObserver(
      titleObserverCallback,
      titleObserverOptions
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div id="contact" className="w-[90%] mx-auto">
      <h1
        ref={titleRef}
        className={classNames(
          "text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold transform transition-all duration-1000",
          {
            "translate-y-0 opacity-100": isTitleVisible,
            "translate-y-10 opacity-0": !isTitleVisible,
          }
        )}>
        Contact
      </h1>
      <div className="flex justify-center gap-5 mt-4">
        <a href="mailto:twanasselbergs@outlook.com" rel="noopener noreferrer">
          <CiMail className="w-[60px] rounded-xl cursor-pointer h-[60px] p-4 text-gray-600 bg-[#24272b] shadow-lg hover:shadow-xl duration-500 hover:bg-[#2e3136]" />
        </a>
        <a
          href="https://www.linkedin.com/in/twanasselbergs/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="w-[60px] rounded-xl cursor-pointer h-[60px] p-4 text-gray-600 bg-[#24272b] shadow-lg hover:shadow-xl duration-500 hover:bg-[#2e3136]" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
