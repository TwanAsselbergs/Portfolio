import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

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
    <div id="contact" className="w-[90%] pt-14 md:pt-36 mx-auto">
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
      <form
        method="POST"
        action="mailto: twanasselbergs@outlook.com"
        className="flex justify-center items-center mx-auto flex-col my-8">
        <div className="relative mb-4">
          <input
            type="text"
            id="name"
            className="pl-3 pr-20 pt-5 pb-4 rounded-xl bg-[#2e3136] hover:bg-[#32363b] outline-none w-full peer text-[#c4cfde] duration-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute left-3 top-4 text-gray-500 peer-focus:top-[0px] peer-focus:left-[10px] peer-focus:text-sm transition-all duration-200 ease-in-out font-semibold">
            Name
          </label>
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            id="email"
            className="pl-3 pr-20 pt-5 pb-4 rounded-xl bg-[#2e3136] hover:bg-[#32363b] outline-none w-full peer text-[#c4cfde] duration-500"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-4 text-gray-500 peer-focus:top-[0px] peer-focus:left-[10px] peer-focus:text-sm transition-all duration-200 ease-in-out font-semibold">
            Email
          </label>
        </div>
        <div className="">
          <button
            type="submit"
            className="px-24 py-5 rounded-xl bg-[#2e3136] hover:bg-[#32363b] border-none outline-none w-full peer text-gray-500 font-semibold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
