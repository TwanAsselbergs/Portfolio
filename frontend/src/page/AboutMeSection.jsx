import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

const skills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    alt: "PHP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    alt: "Svelte",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    alt: "SQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    alt: "WordPress",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    alt: "Visual Studio Code",
  },
  {
    src: "https://styles.redditmedia.com/t5_rqf3h/styles/communityIcon_a6itlz5782eb1.png",
    alt: "phpMyAdmin",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "Git",
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const AboutMeSection = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [shuffledSkills, setShuffledSkills] = useState([]);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setShuffledSkills(shuffleArray([...skills]));
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.01,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.current) {
          setIsTitleVisible(entry.isIntersecting);
        } else if (entry.target === textRef.current) {
          setIsTextVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="w-[90%] mx-auto">
      <h1
        ref={titleRef}
        className={classNames(
          "text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold transform transition-all duration-1000 mt-24 md:mt-12",
          {
            "translate-y-0 opacity-100": isTitleVisible,
            "translate-y-10 opacity-0": !isTitleVisible,
          }
        )}>
        About Me
      </h1>
      <p
        ref={textRef}
        className={classNames(
          "text-[#c4cfde] text-sm md:text-md lg:text-lg w-full md:w-3/4 lg:w-1/2 flex justify-center items-center mx-auto pr-4 pl-4 md:pr-0 md:pl-0 my-4 md:py-10 text-center transform transition-all duration-1000",
          {
            "translate-y-0 opacity-100": isTextVisible,
            "translate-y-10 opacity-0": !isTextVisible,
          }
        )}>
        I’m a second-year software development student with an affinity for
        creating modern and responsive web applications. I love diving deeper
        into what it means to build a well-structured UX by building
        applications myself, as well as learning from others around me and on
        the internet. Recently, I’ve gotten increasingly more into JavaScript
        and enjoy using its frameworks like Svelte, and React. My goal is to
        become a well-rounded full-stack developer, as I’m intrigued by both
        design and back-end technologies such as databases, machine learning,
        and optimization.
        <br></br>
        <br></br>
        Interested to see what tools I’m familiar with? Check out my current
        skillset below!
      </p>
      <div className="flex flex-col gap-4 justify-center mx-auto w-full md:w-3/4 overflow-hidden pt-8 md:pt-7 md:mt-24">
        <div className="flex gap-4 animate-scroll">
          {shuffledSkills.concat(shuffledSkills).map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt}
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#2e3136] hover:bg-[#32363b] cursor-pointer rounded-full p-2 md:p-3 duration-500 mb-12 md:mb-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
