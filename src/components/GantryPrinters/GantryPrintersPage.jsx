import React from "react";
import { PageTransition } from "../../utils/animations.jsx";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero.jsx";
import GantryDescription from "./GantryDescription.jsx";
import GantryModels from "./GantryModels.jsx";
import NeedMoreFlexibility from "./NeedMoreFlexibility.jsx";

const GantryPrintersPage = () => {
  return (
    <div>
      <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <Hero />
          <GantryDescription />
          <GantryModels />
          <NeedMoreFlexibility />

          <div className="flex flex-col items-center gap-[120px] w-full py-[60px]"></div>
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default GantryPrintersPage;
