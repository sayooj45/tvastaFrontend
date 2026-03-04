import React from "react";
import { PageTransition } from "../../utils/animations.jsx";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import WhyMaterialsStandOut from "./WhyMaterialsStandOut.jsx";
import AdvancedMaterials from "./AdvancedMaterials.jsx";
import OurMaterialLineup from "./OurMaterialLineup.jsx";
import BuildBetterTogether from "./BuildBetterTogether.jsx";

const MaterialsPage = () => {
  return (
    <div>
      <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <Hero />
          <WhyMaterialsStandOut />
          <AdvancedMaterials />
          <OurMaterialLineup />
          <BuildBetterTogether />

          <div className="flex flex-col items-center gap-[120px] w-full py-[60px]"></div>
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default MaterialsPage;
