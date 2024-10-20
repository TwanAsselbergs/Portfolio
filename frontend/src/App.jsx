import React from "react";
import Navbar from "./common/navbar/Navbar";
import HomeSection from "./page/HomeSection";
import ProjectsSection from "./page/ProjectsSection";
import ContactSection from "./page/ContactSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default App;
