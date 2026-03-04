import React from "react";
import { PageTransition } from "../../utils/animations.jsx";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import WhatWeProvide from "./WhatWeProvide.jsx";
import FieldReadyAccessories from "./FieldReadyAccessories.jsx";
import ReadyToBuildSmarter from "./ReadyToBuildSmarter.jsx";

const AccessoriesandTurnkeyPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col w-full px-4 md:px-6 lg:px-8">
          <Hero />
          <WhatWeProvide />
          <FieldReadyAccessories />
          <ReadyToBuildSmarter />

          <div className="flex flex-col items-center gap-[120px] w-full py-[60px]"></div>
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default AccessoriesandTurnkeyPage;
