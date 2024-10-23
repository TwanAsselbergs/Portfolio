import React from "react";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import HomeSection from "./page/HomeSection";
import ProjectsSection from "./page/ProjectsSection";
import ContactSection from "./page/ContactSection";
import SkillsSection from "./page/SkillsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <section className="snap-start snap-always h-screen flex justify-center items-center">
          <HomeSection />
        </section>
        <section className="snap-start snap-always h-screen flex justify-center items-center">
          <ProjectsSection />
        </section>
        <section className="snap-start snap-always h-screen flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center mt-0 md:mt-[-7.5%]">
            <SkillsSection />
            <ContactSection />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
