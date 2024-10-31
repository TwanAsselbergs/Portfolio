import React from "react";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import HomeSection from "./page/HomeSection";
import ProjectsSection from "./page/ProjectsSection";
import ContactSection from "./page/ContactSection";
import AboutMeSection from "./page/AboutMeSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <section
          id="home"
          className="snap-start snap-always h-screen flex justify-center items-center">
          <HomeSection />
        </section>
        <section
          id="aboutme"
          className="snap-start snap-always h-screen flex justify-center items-center">
          <AboutMeSection />
        </section>
        <section
          id="projects"
          className="snap-start snap-always h-screen flex justify-center items-center">
          <ProjectsSection />
        </section>
        <section
          id="contact"
          className="snap-start snap-always h-screen flex justify-center items-center">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
