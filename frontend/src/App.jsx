import React from "react";
import Navbar from "./common/navbar/Navbar";
import HomeSection from "./page/HomeSection";
import ProjectsSection from "./page/ProjectsSection";
import ContactSection from "./page/ContactSection";
import SkillsSection from "./page/SkillsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default App;
