import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

const SkillsSection = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

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
      alt: "PHPMyAdmin",
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

  const shuffledSkills = shuffleArray([...skills]);

  useEffect(() => {
    const titleObserverOptions = {
      threshold: 0.1,
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
    <div id="skills" className="w-[100%] md:w-[50%] pt-0 md:pt-2 mx-auto">
      <h1
        ref={titleRef}
        className={classNames(
          "text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] text-center font-bold md:mt-4 transform transition-all duration-1000",
          {
            "translate-y-0 opacity-100": isTitleVisible,
            "translate-y-10 opacity-0": !isTitleVisible,
          }
        )}>
        Skills
      </h1>
      <div className="flex flex-col gap-4 justify-center mx-auto w-[80%] md:w-3/4 overflow-hidden pt-8 md:pt-7">
        <div className="flex gap-4 animate-scroll">
          {shuffledSkills.concat(shuffledSkills).map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt}
              className="w-12 h-12 md:w-16 md:h-16 bg-[#2e3136] hover:bg-[#32363b] cursor-pointer rounded-full p-3 duration-500 mb-12 md:mb-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
