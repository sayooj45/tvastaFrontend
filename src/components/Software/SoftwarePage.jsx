import React from "react";
import { PageTransition } from "../../utils/animations.jsx";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import SoftwareStack from "./SoftwareStack.jsx";
import SmarterBuilds from "./SmarterBuilds.jsx";
import DesignedToEvolve from "./DesignedToEvolve.jsx";

const SoftwarePage = () => {
  return (
    <div>
      <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <Hero />
          <SoftwareStack />
          <DesignedToEvolve />
          <SmarterBuilds />
          <div className="flex flex-col items-center gap-[120px] w-full py-[60px]"></div>
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default SoftwarePage;
