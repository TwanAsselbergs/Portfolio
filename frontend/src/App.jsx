import React from "react";
import Navbar from "./common/navbar/Navbar";
import HomeSection from "./page/HomeSection";
import PortfolioSection from "./page/PortfolioSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <PortfolioSection />
    </>
  );
};

export default App;
