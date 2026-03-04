import React from "react";
import { PageTransition } from "../../utils/animations.jsx";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import RoboticDescription from "./RoboticDescription.jsx";
import RoboticModels from "./RoboticModels.jsx";
import PrintSmarter from "./PrintSmarter.jsx";
const RoboticPrintersPage = () => {
  return (
    <div>
      <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <Hero />
          <RoboticDescription />
          <RoboticModels />
          <PrintSmarter />
          <div className="flex flex-col items-center gap-[120px] w-full py-[60px]"></div>
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default RoboticPrintersPage;
