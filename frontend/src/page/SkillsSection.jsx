import React from "react";

const SkillsSection = () => {
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
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledSkills = shuffleArray([...skills]);

  return (
    <div id="skills" className="w-[90%] pt-14 md:pt-0 mx-auto">
      <h1 className="text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] text-center font-bold mt-20 md:mt-4">
        Skills
      </h1>
      <div className="flex flex-col gap-4 justify-center mx-auto w-[40%] md:w-1/2 overflow-hidden pt-8 md:pt-20">
        <div className="flex gap-4 animate-scroll">
          {shuffledSkills.concat(shuffledSkills).map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt}
              className="w-12 h-12 md:w-16 md:h-16 bg-[#2e3136] hover:bg-[#32363b] cursor-pointer rounded-full p-3 duration-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
